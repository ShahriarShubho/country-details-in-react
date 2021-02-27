import React from 'react';

const SelectedCountry = (props) => {
    const country = props.cart;
    const totalData = country.reduce((sum, country) => sum + country.population,0)

    // let totalPopulation = 0;
    // for (let i = 0; i < country.length; i++) {
    //     const element = country[i];
    //     totalPopulation = totalPopulation + element.population
    // }

    return (
        <div>
           <h3>selected Country : {country.length} </h3>
           <h3>total population : {totalData} </h3>
        </div>
    );
};

export default SelectedCountry;