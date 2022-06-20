import axios from "axios";

const url2GetPeople = "http://localhost:3001/persons";
const url2CreatePerson = "http://localhost:3001/persons";

const getPeople = () => {
  return axios.get(url2GetPeople);
};

const createPerson = (newObject) => {
  return axios.post(url2CreatePerson, newObject);
};

export default {
  getPeople: getPeople,
  createPerson: createPerson,
};
