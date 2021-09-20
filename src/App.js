// import logo from './logo.svg';
import './App.css';
import Travel from './components/Travel/Travel';



// import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
     <Travel></Travel>
    </div>
  );
}














// function Countries(){
//   const [countries, setCountries] = useState([])
//   useEffect(()=>{
//     fetch('https://restcountries.eu/rest/v2/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   },[])
//   return(
//     <div>
//       <h2> Travelling around the world </h2>
//       <h4>Available countries: {countries.length} </h4>
//       {
//         countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
//       }
//     </div>
//   )
// }
// function Country(props){
//   return(
//     <div>
//       <h2>Name:{props.name} </h2>
//       <h4>Capital:{props.capital}</h4>
//     </div>
//   )
// }

export default App;
