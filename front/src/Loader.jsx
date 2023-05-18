import exchangeLogo from './assets/currency.svg'
import './Loader.css';

export function Loader() {
    
    return (
      <div className='loader'>
        <img src={exchangeLogo} className="girar" alt="Exchange logo" />
      </div>
    )
}