import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LocalStorageProvider } from './contexts/LocalStorageContext.jsx'
import { CurrencyProvider } from './contexts/CurrencyContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LocalStorageProvider>
      <CurrencyProvider>
        <App />
      </CurrencyProvider>
    </LocalStorageProvider>
  </React.StrictMode>,
)
