import "./App.css";
import { useEffect, useState } from "react";
import Title from "./components/title";
import Filter from "./components/filter";
import AddContact from "./components/addContact";
import Main from "./components/main";
import peopleService from "./services/requests";
import Notification from "./components/error";

const App = () => {
  const [people, setPeople] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filtered, setFiltered] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    peopleService.getPeople().then((response) => {
      setPeople(response.data);
    });
  }, [people.length]);

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
      id: people[people.length - 1].id + 1,
    };
    if (people.find((p) => p.name === newPerson.name)) {
      setError(`${newPerson.name} name already exists.`);
      setTimeout(() => {
        setError(null);
      }, 5000);
      setNewName("");
    } else if (people.find((p) => p.number === newPerson.number)) {
      setError(`${newPerson.number} number already exists.`);
      setTimeout(() => {
        setError(null);
      }, 5000);
      setNewNumber("");
    } else {
      peopleService.createPerson(newPerson).then((response) => {
        setPeople(people.concat(response.data));
        setError(false);
        setTimeout(() => {
          setError(null);
        }, 5000);
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const handleChangeFilter = (event) => {
    setFiltered(event.target.value);
  };

  const filtering = (str) => {
    console.log("p at fil", people);
    const result = people.filter((personTest) =>
      personTest.name.toLowerCase().includes(str.toLowerCase())
    );
    if (result === []) {
      return (
        <p>
          <b>No personTests found</b>
        </p>
      );
    }
    console.log("result", result);
    return result.map((pp) => (
      <p key={pp.name}>
        {pp.id}. {pp.name}. {pp.number}
      </p>
    ));
  };

  const clear = () => {
    setFiltered("");
    setError(null);
  };
  return (
    <div id="main">
      <Title title="Phonebook" />
      <Notification message={error} />
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
      <Main
        value={filtered}
        arr={people}
        function={filtering(filtered)}
        state={people}
        setState={setPeople}
        error={setError}
      />
    </div>
  );
};

export default App;
