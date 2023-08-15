import axios from 'axios';
import { useState, useEffect } from 'react';
import Monedas from './components/Monedas';
import "./App.css"

function App() {
  const [data, setData] = useState({})
  const [inputValue, setInputValue] = useState('');
  const [showResult, setShowResult] = useState(false)
  const [pesos, setPesos] = useState(0);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const changeCoin = () => {
    if (inputValue !== "") {
      setShowResult(true)
      setPesos(inputValue)
    }
  }



  useEffect(() => {
    // Realizar la llamada a la API cuando el componente se monte
    axios.get('https://api.bluelytics.com.ar/v2/latest')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los datos de la API:', error);
      });
  }, []);

  return (
    <div className="container jumbotron p-1 ">
    <header className="bg-dark text-white text-center py-2 rounded">
      <h1 className="display-4">Coin Monitor</h1>
      <h6>Cotizacion de las principales monedas en Pesos Argentinos (ARS)</h6>
    </header>
      <div className=' col mt-2'>
        	<input type="text" 
            value={inputValue}
            onChange={handleInputChange}
            placeholder='Ingresar cantidad de pesos a convertir' ></input>
            <div className='btn btn-primary btn-extra-large mx-2' onClick={changeCoin}>CONVERTIR A PESOS</div>
      </div>
      
      <Monedas datos={data} pesos={pesos} showResult={showResult}></Monedas>
    </div>
  );
}

export default App
