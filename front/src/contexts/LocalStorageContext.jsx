/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const LocalStorageContext = createContext(null);

export function LocalStorageProvider(props) {
    const [lista, setLista] = useState(JSON.parse(localStorage.getItem('CalcuConversiones')) ?? [])
    
    const borrarTodo = () => {
        if (confirm('Se va a borrar todos los datos de la tabla. Desea continuar?')) {
            setLista([])
            localStorage.clear();
        }
    }

    return (
        <LocalStorageContext.Provider value={{lista, setLista, borrarTodo}}>
            {props.children}
        </LocalStorageContext.Provider>
    )
    
}

export function useLocalStorage(){
    const context = useContext(LocalStorageContext);

    if (!Object.entries(context).length) {
        throw new Error('useLocalStorage debe ser usado dentro del LocalStorageContext');
    }

    return context;
}

