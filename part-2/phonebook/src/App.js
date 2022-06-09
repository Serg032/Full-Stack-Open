import "./App.css"
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }

  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")
  const [filtered, setFiltered] = useState("")

  
  const handleChangeName = (e) => {
    setNewName(e.target.value)
  }

  const handleChangePhone = (e) => {
    setNewNumber(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPerson = {
      id: persons[persons.length -1].id + 1,
      name: newName,
      number: newNumber
    }
    if (persons.find(p => p.name === newPerson.name)){
      alert(`${newPerson.name} name already exists`)
      setNewName("")
      setNewNumber("")
    } 
    else if (persons.find(p => p.phoneNumber === newPerson.number)){
      alert(`${newPerson.phoneNumber} number already exists`)
      setNewName("")
      setNewNumber("")
    } else {
      setPersons(persons.concat(newPerson))
      setNewName("")
      setNewNumber("")
    }
  }

  const handleChangeFilter = (event) => {
    setFiltered(event.target.value)
  }

  const filtering = (str) => {
    const result = persons.filter(person => person.name.toLowerCase().includes(str.toLowerCase()))
    if(result === ([])){
      return <p><b>No contacts found</b></p>
    }
    return result.map(contact => <p key={contact.name}>{contact.id}. {contact.name}. {contact.number}</p>)
  }

  const clear = () => setFiltered("")

  return (
    <div id="main">
      <h2>Phonebook</h2>
      <div>
        filter shown with
        <input
        type="text"
        placeholder="...filter by"
        value={filtered}
        onChange={handleChangeFilter}
        />
        <button onClick={clear}>clear</button>
      </div>
      <br/>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            name:
            <input
            value={newName} 
            type="text" 
            placeholder='...name'
            onChange={handleChangeName}
            />
          </div>
          <div>
            number
            <input
            value={newNumber}
            type="text"
            placeholder='...phone number'
            onChange={handleChangePhone}
            />
          </div>
         
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      {filtered === "" ? 
      <div>
        <h2>Numbers</h2>
        {persons.map(p => (
        <p key={p.id}>{p.id}. {p.name}. {p.number}</p>
        ))}
      </div> : 
      <div>
      <h2>Numbers</h2>
      <div>{filtering(filtered)}</div>
      </div>}
    </div>
  )
}

export default App