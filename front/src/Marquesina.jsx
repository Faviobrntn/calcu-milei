import { useCurrency } from "./contexts/CurrencyContext";
import './Marquesina.css';

export function Marquesina() {
    
    const {oficial, blue, liqui, mep, loading} = useCurrency();

    if (loading) {
        return (<marquee> Cargando . . . </marquee>)
    }else{
        return (
            <>
                {loading && <marquee> Cargando . . . </marquee>}
                <marquee>
                    <div className="hstack gap-3">
                        <b>Cotizaciones del dia </b>
                        {oficial.nombre} - Compra: {oficial.compra} / Venta: {oficial.venta}
                        <div className="vr"></div>
                        {blue.nombre} - Compra: {blue.compra} / Venta: {blue.venta}
                        <div className="vr"></div>
                        {liqui.nombre} - Compra: {liqui.compra} / Venta: {liqui.venta}
                        <div className="vr"></div>
                        {mep.nombre} - Compra: {mep.compra} / Venta: {mep.venta}
                    </div>
                </marquee>
            
            </>
        );
    }
}