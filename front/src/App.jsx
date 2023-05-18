import {Conversor} from './Conversor'
import { Conversiones } from './Conversiones'

import reactLogo from './assets/currency.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Marquesina } from './Marquesina'
import { Loader } from './Loader'
import { useCurrency } from './contexts/CurrencyContext'

function App() {
  const {loading} = useCurrency();
  return (
    <>
      {loading && <Loader />}
      <h1>La Calcu de Milei</h1>
      <div>
        <Marquesina />
        {/* <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> */}
        {/* <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
        {/* <a href="#" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo" alt="Exchange logo" />
        </a> */}
      </div>
      
      <div className="row">
        <div className="col-12 col-md-4">
          <div className="card">

            <Conversor />
          
          </div>
          <p className="read-the-docs">
            El valor que se toma para guardar es el valor de compra.
          </p>
        </div>

        
        <div className="col-12 col-md-8">
          <div className="card">
            
            <Conversiones />
            
          </div>
        </div>

      </div>
      
    </>
  )
}

export default App
