import React from 'react';
import './Country.css'
const Countries = (props) => {
  const  {name, capital, flag, population, region, languages} = props.countries;
  
    return (
        <div className="country-information">
            <img className="flag" src={flag} alt=""/>
           <h2>{name}</h2>
           <h4>Capital : {capital}</h4>
           <h4>This population : {population}</h4>
           <h4>Region : {region}</h4>
           <h4>Language : {languages.name}</h4>
           <button onClick={() => props.handleCountries(props.countries)}>Add Button</button>
        </div>
    );
};

export default Countries;