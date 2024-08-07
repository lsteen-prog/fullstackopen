import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {

  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] =useState('')

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }
  
  useEffect(hook, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value.toLowerCase())
  }

  const addPerson = (event) => {
    event.preventDefault()

    if (nameAlreadyExist(newName)) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: String(persons.length + 1)
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const nameAlreadyExist = (name) => persons.some((person) => person.name === name)

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter))


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={handleFilterChange}/>
      <h3>Add a new</h3>
      <PersonForm 
        nameValue={newName} 
        numberValue={newNumber} 
        onSubmit={addPerson} 
        onNameChange={handleNameChange} 
        onNumberChange={handleNumberChange}/>
      <h3>Numbers</h3>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App