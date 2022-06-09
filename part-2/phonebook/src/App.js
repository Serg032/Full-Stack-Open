import "./App.css"
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      phoneNumber: "040-1234567" 
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName,
      phoneNumber: newNumber
    }
    if (persons.find(p => p.name === newPerson.name)){
      alert(`${newPerson.name} already exists`)
      setNewName("")
      setNewNumber("")
    } else if (persons.find(p => p.phoneNumber === newPerson.phoneNumber)){
      alert(`${newPerson.phoneNumber} already exists`)
      setNewName("")
      setNewNumber("")
    } else {
      setPersons(persons.concat(newPerson))
      setNewName("")
    }
  
  }

  const handleChangeName = (e) => {
    setNewName(e.target.value)
  }

  const handleChangePhone = (e) => {
    setNewNumber(e.target.value)
  }

  return (
    <div id="main">
      <h2>Phonebook</h2>
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
      <h2>Numbers</h2>
      {persons.map(p => (
        <p key={p.name}>{p.name}. {p.phoneNumber}</p>
      ))}
    </div>
  )
}

export default App