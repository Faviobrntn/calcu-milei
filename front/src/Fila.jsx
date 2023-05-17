export function Fila({item}){
    
    return (
        <tr>
            <td>{item.etiqueta}</td>
            <td>{item.pesos}</td>
            <td>{item.dolares}</td>
            <td>{item.tipo_dolar}</td>
            <td>{item.valor_dolar}</td>
        </tr>
    )
}