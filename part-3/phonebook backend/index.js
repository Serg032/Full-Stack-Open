const express = require("express");
const app = express();
const port = 3001;
const morgan = require(`morgan`);

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
const process = (request, response, next) => {
  console.log("Learning Express.js");
  console.log("REMEMBER. Issue at 3.6, Post error handling");
  next();
};

app.use(process);
app.use(express.json());
app.use(morgan(`tiny`));

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
  const body = request.body;
  const person = {
    id: generateId(),
    name: body.name,
    number: body.number,
  };
  if (!body.name) {
    return response.status(400).json({ error: "name missing." });
  } else if (!body.number) {
    return response.status(400).json({ error: "name missing." });
  } else if (data.filter((person) => person.name === body.name).length > 0) {
    return response
      .status(400)
      .json({ error: `${person.name} already exists.` });
  } else if (
    data.filter((person) => person.number === body.number).length > 0
  ) {
    return response
      .status(400)
      .json({ error: `${person.number} already exists.` });
  } else {
    data = data.concat(person);
    return response.status(200).json({ message: "Person created" });
  }
});
app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  data = data.filter((p) => p.id !== id);
  response.status(204).json({ message: `Person deleted` });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
