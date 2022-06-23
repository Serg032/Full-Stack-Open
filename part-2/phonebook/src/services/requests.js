import axios from "axios";

const url = "http://localhost:3001/persons";

const getPeople = () => {
  return axios.get(url);
};

const createPerson = (newObject) => {
  return axios.post(url, newObject);
};

const removePerson = (name, id, state, setState) => {
  if (window.confirm(`Delete ${name}?`)) {
    return axios
      .delete(`${url}/${id}`)
      .then(setState((state) => state.filter((person) => person.id !== id)));
  }
};

export default {
  getPeople: getPeople,
  createPerson: createPerson,
  removePerson: removePerson,
};