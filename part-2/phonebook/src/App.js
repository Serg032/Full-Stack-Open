import "./App.css";
import { useEffect, useState } from "react";
import Title from "./components/title";
import Filter from "./components/filter";
import AddContact from "./components/addContact";
import Main from "./components/main";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filtered, setFiltered] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
      console.log("reponse", response.data);
    });
  }, [persons.length]);

  const handleChangeName = (e) => {
    setNewName(e.target.value);
  };

  const handleChangePhone = (e) => {
    setNewNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons[persons.length - 1].id + 1,
    };
    if (persons.find((p) => p.name === newPerson.name)) {
      alert(`${newPerson.name} name already exists`);
      setNewName("");
    } else if (persons.find((p) => p.number === newPerson.number)) {
      alert(`${newPerson.number} number already exists`);
      setNewNumber("");
    } else {
      axios
        .post(" http://localhost:3001/persons", newPerson)
        .then((response) => {
          console.log("added", response);
          setPersons(persons.concat(response.data));
          setNewName("");
          setNewNumber("");
        });
    }
  };

  const handleChangeFilter = (event) => {
    setFiltered(event.target.value);
  };

  const filtering = (str) => {
    const result = persons.filter((contact) =>
      contact.name.toLowerCase().includes(str.toLowerCase())
    );
    if (result === []) {
      return (
        <p>
          <b>No contacts found</b>
        </p>
      );
    }
    return result.map((contact) => (
      <p key={contact.name}>
        {contact.id}. {contact.name}. {contact.number}
      </p>
    ));
  };

  const clear = () => setFiltered("");

  return (
    <div id="main">
      <Title title="Phonebook" />
      <Filter
        value={filtered}
        eventHandler={handleChangeFilter}
        function={clear}
      />
      <br />
      <AddContact
        eventSubmit={handleSubmit}
        valueName={newName}
        eventName={handleChangeName}
        valueNumber={newNumber}
        eventNumber={handleChangePhone}
      />
      <Main value={filtered} arr={persons} function={filtering(filtered)} />
    </div>
  );
};

export default App;
