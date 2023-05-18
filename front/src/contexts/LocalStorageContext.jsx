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
    const eliminarItem = (etiqueta) => {
        if (confirm(`Se va a borrar ${etiqueta} de la tabla. Desea continuar?`)) {

            // const busqueda = lista.findIndex((obj) => obj.etiqueta == etiqueta);
            
            const newLista = [...lista.filter(obj => obj.etiqueta != etiqueta)];
            setLista(newLista);
            localStorage.setItem('CalcuConversiones', JSON.stringify(newLista));
        }
    }
    
    return (
        <LocalStorageContext.Provider value={{lista, setLista, borrarTodo, eliminarItem}}>
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

