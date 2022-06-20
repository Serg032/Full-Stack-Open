import axios from "axios";
import React, { useEffect, useState } from "react";
import Finder from "./components/finder";
import ShowResults from "./components/showResults";
import Title from "./components/title";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleChange = (e) => {
    setSearchFilter(e.target.value);
  };
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div>
      <Title title="Data for Countries" />
      <Finder value={searchFilter} function={handleChange} />
      <ShowResults results={filteredCountries} state={setSearchFilter} />
    </div>
  );
};

export default App;
