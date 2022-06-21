import axios from "axios";

const url = "http://localhost:3001/persons";

const getPeople = () => {
  return axios.get(url);
};

const createPerson = (newObject) => {
  return axios.post(url, newObject);
};

const deletePerson = (id) => {
  console.log("delete request");
  return axios.delete(`${url}/${id}`);
};

export default {
  getPeople: getPeople,
  createPerson: createPerson,
  deletePerson: deletePerson,
};
