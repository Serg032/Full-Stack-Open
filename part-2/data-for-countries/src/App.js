import axios from "axios";
import React, { useEffect, useState } from "react";
import Finder from "./components/finder";
import ShowResults from "./components/showResults";
import Title from "./components/title";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    console.log("Effect");
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchFilter.toLowerCase())
  );

  const handleChange = (e) => {
    setSearchFilter(e.target.value);
  };

  console.log(filteredCountries.length);

  return (
    <div>
      <Title title="Data for Countries" />
      <Finder value={searchFilter} function={handleChange} />
      <ShowResults results={filteredCountries} state={setSearchFilter} />
    </div>
  );
};

export default App;
