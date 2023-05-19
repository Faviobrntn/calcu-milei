/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const LocalStorageContext = createContext(null);

export function LocalStorageProvider(props) {
    const [lista, setLista] = useState(JSON.parse(localStorage.getItem('CalcuConversiones')) ?? []);
    
    const borrarTodo = () => {
        if (confirm('Se va a borrar todos los datos de la tabla. Desea continuar?')) {
            setLista([])
            localStorage.clear();
            setClave(0);
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
    const agregarItem = (item) => {
        const newLista = [...lista];
        newLista.push(item);
        if (newLista.length > 5) {
            newLista.shift();
        }
        setLista(newLista);
        localStorage.setItem('CalcuConversiones', JSON.stringify(newLista));

    }
    const actualizarItem = (k, item) => {
        const newLista = [...lista];
        newLista[k] = item;
        setLista(newLista);
        localStorage.setItem('CalcuConversiones', JSON.stringify(newLista));
    }
    
    return (
        <LocalStorageContext.Provider value={{lista, setLista, borrarTodo, agregarItem, actualizarItem, eliminarItem}}>
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

