/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const CurrencyContext = createContext(null);

export function CurrencyProvider(props) {
    const [oficial, setOficial] = useState();
    const [blue, setBlue] = useState();
    const [liqui, setLiqui] = useState();
    const [mep, setMep] = useState();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    async function fetchData() {
        setLoading(true);

        try {
            // const response = await fetch('https://api.bluelytics.com.ar/v2/latest');
            const response = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales');
            if (!response.ok) {
                throw new Error("Algo salio mal!");
            }
            const responseBody = await response.json();
            // console.log(responseBody);
            // setOficial(responseBody.oficial);
            // setBlue(responseBody.blue);

            responseBody.map((datos) => {
                const extract = datos.casa;
                if (extract.nombre == "Dolar Oficial") {
                    setOficial(extract);
                }
                if (extract.nombre == "Dolar Blue") {
                    setBlue(extract);
                }
                if (extract.nombre == "Dolar Contado con Liqui") {
                    setLiqui(extract);
                }
                if (extract.nombre == "Dolar Bolsa") {
                    setMep(extract);
                }
            });
        } catch (err) {
            setError(err);
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();

    }, []);

    return (
        <CurrencyContext.Provider value={{oficial, blue, liqui, mep, loading, error}}>
            {props.children}
        </CurrencyContext.Provider>
    )
    
}

export function useCurrency(){
    const context = useContext(CurrencyContext);

    if (!Object.entries(context).length) {
        throw new Error('useCurrency debe ser usado dentro del CurrencyContext');
    }

    return context;
}

