import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './Component/Countries/Countries';
import SelectedCountry from './Component/SelectedCountry/SelectedCountry';

function App() {

  const [countries, setCountries] = useState([]);

  const [cart, setCart] = useState([]);
 

  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(err => console.log(err))
  }, [])

  const handleCountries = (country) =>{
      const newCart = [...cart, country]
      setCart(newCart)

  }
  return (
    <div className="App">
      <h1>Country Data length : {countries.length}</h1>
      <SelectedCountry cart={cart}></SelectedCountry>
      {countries.map(country => <Countries handleCountries={handleCountries} countries={country} key={country.alpha3Code}></Countries>)}
     
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
