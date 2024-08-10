import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {

  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] =useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

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

    const foundPerson = nameAlreadyExist(newName)
    if (foundPerson) {
      if (confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const changedPerson = { ...foundPerson, number: newNumber }
        personService
          .update(foundPerson.id, changedPerson)
          .then(returnedPerson  => {
            setPersons(persons.map(person => person.id !== foundPerson.id ? person : returnedPerson ))
          })
      }
    }
    else {
      const personObject = {
        name: newName,
        number: newNumber
      }
      
    personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
    }
  }

  const nameAlreadyExist = (name) => persons.find((person) => person.name === name)

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter))

  const deletePerson = (person) => {
    if (confirm(`Delete ${person.name} ?`)) {
      
      personService
        .deletePerson(person.id)
        .then(deletedPerson => {
          setPersons(persons.filter(p => p.id !== deletedPerson.id))
        })
    }
  }

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
      <Persons persons={personsToShow} deletePerson={deletePerson}/>
    </div>
  )
}

export default App