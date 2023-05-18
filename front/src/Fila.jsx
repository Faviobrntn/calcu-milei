import { useLocalStorage } from "./contexts/LocalStorageContext";

export function Fila({item}){
    const {eliminarItem} = useLocalStorage();
    return (
        <tr>
            <td>{item.etiqueta}</td>
            <td>{item.pesos}</td>
            <td>{item.dolares}</td>
            <td>{item.tipo_dolar}</td>
            <td>{item.valor_dolar}</td>
            <td><button className="btn btn-sm btn-danger" value={item.etiqueta} onClick={(e) => eliminarItem(e.target.value)}>Eliminar</button></td>
        </tr>
    )
}