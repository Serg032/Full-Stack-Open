import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName
    }
    setPersons(persons.concat(newPerson))
    setNewName(" ")
  }

  const handleOnChange = (e) => {
    setNewName(e.target.value)
  }

  console.log(persons)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <p>name:</p>
          <input
          value={newName} 
          type="text" 
          onChange={handleOnChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(p => (
        <p key={p.name}>{p.name}</p>
      ))}
    </div>
  )
}

export default App