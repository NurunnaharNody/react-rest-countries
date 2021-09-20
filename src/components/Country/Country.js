import React from 'react';
import "./Country.css"

const Country = (props) => {
    const {name, flag, capital,region, population} = props.travel;
    return (
        <div className="country">
            <h3> {name} </h3>
            <img src={flag} alt="" />
            <h5>Capital:{capital}</h5>
            <p><small>Region:{region}</small></p>
            <h4>Population:{population}</h4>
        </div>
    );
};

export default Country;