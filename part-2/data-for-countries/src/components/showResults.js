import React from "react";

const ShowResults = (props) => {
  if (props.results.length > 9) {
    return <p>Too many matches, specify another filter</p>;
  } else if (props.results.length === 0) {
    return <p>No results</p>;
  } else if (props.results.length < 10 && props.results.length > 1) {
    return (
      <ul>
        {props.results.map((country) => (
          <div key={country.name.common}>
            <li key={country.name.common}>{country.name.common}</li>
            <button
              value={country.name.common}
              onClick={(e) => props.state(e.target.value)}
            >
              show
            </button>
          </div>
        ))}
      </ul>
    );
  } else if (props.results.length === 1) {
    const country = props.results[0];
    return (
      <div key={country.name.common}>
        <h2>{country.name.official}</h2>
        <p>capital {country.capital}</p>
        <p>area {country.area}</p>
        <br />
        <b>languages</b>
        <ul>
          {Object.values(country.languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <img alt={country.name.common} src={country.flags.png} width="20%" />
      </div>
    );
  }
};

export default ShowResults;
