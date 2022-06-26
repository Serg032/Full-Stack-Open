const express = require("express");
const app = express();
const port = 3001;

let data = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];
app.use(express.json());

app.get("/api/persons", (request, response) => {
  response.json(data);
});

app.get("/api/persons/info", (req, res) => {
  const entries = data.length;
  const date = new Date();
  res.send(
    `<div>
      <p>Phonebook has info for ${entries} people</p>
      <p>${date}</p>
    </div>`
  );
});
app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = data.find((p) => p.id === id);

  if (person) {
    console.log("Success", person);
    response.json(person);
  } else {
    response.status(404).json({ error: `No person with id: ${id} found.` });
  }
});

const generateId = () => {
  const maxId =
    data.length > 0 ? Math.max(...data.map((element) => element.id)) : 0;
  return maxId + 1;
};

app.post(`/api/persons/`, (request, response) => {
  const requestBody = request.body;
  const names = data.map((p) => p.name);
  console.log("names", names[0]);
  console.log("rb", requestBody.name);
  const person = {
    id: generateId(),
    name: requestBody.name,
    number: requestBody.number,
  };
  if (!request.body.name) {
    return response.status(400).json({ error: "name missing." });
  } else if (!request.body.number) {
    return response.status(400).json({ error: "name missing." });
  } else if (requestBody.name === names.map((name) => name)) {
    response.status(400).json({ error: `${requestBody.name} already exists.` });
  } else {
    data = data.concat(person);
    console.log(
      "Data updated.",
      data.map((p) => p)
    );
    return response.status(200).json({ message: `Person created` });
  }
});
console.log(data.map((element) => element.name));
app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  data = data.filter((p) => p.id !== id);
  response.status(204).json({ message: `Person deleted` });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
