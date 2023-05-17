import { useEffect } from "react";
import { Fila } from "./Fila";
import { useLocalStorage } from "./contexts/LocalStorageContext";

export function Conversiones() {
    // const [lista, setLista] = useState(JSON.parse(localStorage.getItem('CalcuConversiones')) ?? [])
    const {lista, borrarTodo} = useLocalStorage();

    // useEffect(() => {
    //     console.log("Escuchando Lista desde conversiones.jsx: ", lista);
    // }, [lista]);

    return (
        <>
            <button onClick={borrarTodo} className="btn btn-danger">Limpiar</button>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio $</th>
                        <th>Precio u$d</th>
                        <th>Tipo de dólar</th>
                        <th>Cotización del dia</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        lista.map(
                            (cotizacion) =>  <Fila key={cotizacion.etiqueta} item={cotizacion} />
                        )
                    }
                </tbody>
            </table>
        </>
    );
}