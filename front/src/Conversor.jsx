import { useState, useEffect, useMemo } from 'react'
import { useLocalStorage } from './contexts/LocalStorageContext'
import { useCurrency } from './contexts/CurrencyContext';
import './Conversor.css'

export function Conversor() {
    const {lista, setLista} = useLocalStorage();
    const {oficial, blue, liqui, mep, loading} = useCurrency();
    const [importe, setImporte] = useState(0)
    const [tipo_dolar, setTipoDolar] = useState('oficial')
    const [conversion, setConversion] = useState({compra: 0, venta: 0})

    // Guarda en memoria la constante para que no vuelva a refrescar con el componente sino que refresque
    // con los cambios de las dependencias
    const cotizaciones = useMemo(() => {
        return {
            // oficial: oficial.value_sell,
            oficial: oficial,
            // blue: blue.value_sell,
            blue: blue,
            liqui: liqui,
            mep: mep
        }
    }, [oficial, blue, liqui, mep]);

    useEffect(() => {
        // setConversion((importe / cotizaciones[tipo_dolar]).toFixed(2));
        if (!loading) {
            convertir();
        }
    }, [importe, tipo_dolar]);

    const convertir = () => {
        setConversion(
            {
                compra: (parseFloat(importe) / parseFloat(cotizaciones[tipo_dolar].compra)).toFixed(2),
                venta: (parseFloat(importe) / parseFloat(cotizaciones[tipo_dolar].venta)).toFixed(2)
            }
        );
    }
    const saveItem = () => {
        // convertir();
        let etiqueta = prompt('Nombre con el que quiere guardar: ');
        etiqueta = etiqueta.trim().toLowerCase();
        etiqueta = etiqueta.charAt(0).toUpperCase() + etiqueta.slice(1);

        if (etiqueta.trim() != "") {
            const busqueda = lista.findIndex((obj) => obj.etiqueta == etiqueta);
            // const dolares = (importe / cotizaciones[tipo_dolar]).toFixed(2);        
            const dolares = conversion.compra;   
            const newLista = [...lista];
            const item = {
                etiqueta: etiqueta,
                pesos: importe,
                tipo_dolar: cotizaciones[tipo_dolar].nombre,
                valor_dolar: cotizaciones[tipo_dolar].compra,
                dolares: dolares
            };
            if (busqueda == -1) {
                newLista.push(item);
            }else{
                newLista[busqueda] = item;
            }
            setLista(newLista);
            localStorage.setItem('CalcuConversiones', JSON.stringify(newLista));
            reset();
        }
    }

    const reset = () => {
        setImporte(0)
        setTipoDolar('oficial')
    }


    return (
        <>
            <div className='mb-3'>
                <label htmlFor="importe" className='form-label'>Importe (Pesos)</label>
                <input type="number" name="importe" 
                    className='form-control' 
                    value={importe} 
                    onChange={e => setImporte(parseFloat(e.target.value))}
                />
            </div>
            
            <div className='mb-3'>
                <label htmlFor="tipo_dolar" className='form-label'>Dolar</label>
                <select name="tipo_dolar" 
                    className='form-control' 
                    value={tipo_dolar} 
                    onChange={e => setTipoDolar(e.target.value)}
                >
                    <option value="oficial">Oficial</option>
                    <option value="blue">Blue</option>
                    <option value="liqui">Contado con liqui</option>
                    <option value="mep">Mep</option>
                </select>
            </div>


            <button onClick={convertir} className='btn btn-lg btn-block btn-dark mb-3'>
                Convertir
            </button>
        
            <button onClick={saveItem} className='btn btn-lg btn-block btn-primary mb-3'>
                Convertir y Guardar
            </button>

            <br />
            
            <fieldset>
                <legend>Valor en dólares</legend>
                <p>
                    <b>Compra: </b> u$d {conversion.compra}
                </p>
                <p>
                    <b>Venta: </b> u$d {conversion.venta}
                </p>
            </fieldset>
        </>
    )
}