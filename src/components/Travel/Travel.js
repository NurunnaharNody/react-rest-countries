import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import "./Travel.css"

const Travel = () => {
    const [travels, setTravels] = useState([]);
    useEffect (() =>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setTravels(data))
    },[])
    return (
        <div className="travel">
            <h2>Your comfort Countries here</h2>
            <h4>Comfortable countries Count: {travels.length} </h4>
            <div className="travel-container">
            {
                travels.map(travel => <Country key={travel.capital} travel={travel}></Country>)
            }
            </div>
        </div>
    );
};

export default Travel;