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
  console.log("length", data.length);
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
  // console.log(person);
  // response.json(person);
  if (person) {
    console.log("Success", person);
    response.json(person);
  } else {
    return response
      .status(404)
      .json({ error: `No person with id: ${id} found.` });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
