import { useEffect, useState } from 'react';
import axios from 'axios';
import Title from './components/title';
import Finder from './components/finder';

function App() {

  const [countries, setCountries] = useState([])
  const [name, setName] = useState("belgium")

  useEffect(() => {
    axios
    .get(`https://restcountries.com/v3.1/name/${name}`)
    .then(response => {
      setCountries(response.data)
    })
  },[name])

  const finder = (event) => {
    setName(event.target.value)
  }

  console.log(countries)

  return (
    <div>
      <Title 
      title = "Data for Countries"
      />
      <Finder
        value = {name}
        function = {finder}
      />
      {countries.length === 0 ? <p>No results</p>
      : countries.length === 1 ? countries.map(c => (
        <div key={c.name.common}>
          <h2>{c.name.common}</h2>
          <div>
            <p>capital {c.capital[0]}</p>
            <p>area {c.area}</p>
            <br/>
            <b>languages</b>
            <ul>
              {Object.values(countries[0].languages).map(language => (
                  <li>{language}</li>
                ))}
            </ul>
            <div>
              <img 
              src={c.flags.png}
              alt={c.name.common}
              />
            </div>
            
          </div>
        </div>
      ))
      : countries.length < 10 ? countries.map(c => (
        <div key={c.name.common}>
          <p>{c.name.common}</p>
        </div>
      ))
      : countries.length > 9 ? <p>Please, give us more information</p>
      : <p>Something went wrong</p>
    }
    </div>
  );
}

export default App;

