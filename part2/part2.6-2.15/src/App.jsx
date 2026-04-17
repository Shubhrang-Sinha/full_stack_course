import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Person'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
      .catch(error => {
        console.log('Error fetching persons:', error)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilterName(event.target.value)
  }

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(filterName.toLowerCase())
  )

  const addPerson = (event) => {
    event.preventDefault()

    const existingPerson = persons.find(
      person => person.name.toLowerCase() === newName.toLowerCase()
    )

    if (existingPerson) {
      const confirmUpdate = window.confirm(
        `${existingPerson.name} is already added to phonebook, replace the old number with a new one?`
      )

      if (!confirmUpdate) {
        return
      }

      const updatedPerson = {
        ...existingPerson,
        number: newNumber
      }

      personService
        .update(existingPerson.id, updatedPerson)
        .then(returnedPerson => {
          setPersons(persons.map(person =>
            person.id !== existingPerson.id ? person : returnedPerson
          ))
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {
          console.log('Error updating person:', error)
        })

      return
    }

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
      .catch(error => {
        console.log('Error adding person:', error)
      })
  }

  const deletePerson = (id, name) => {
    const confirmDelete = window.confirm(`Delete ${name} ?`)

    if (!confirmDelete) {
      return
    }

    personService
      .remove(id)
      .then(() => {
        setPersons(prevPersons =>
          prevPersons.filter(person => person.id !== id)
        )
      })
      .catch(error => {
        console.log('Error deleting person:', error)
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter
        filterName={filterName}
        handleFilterChange={handleFilterChange}
      />

      <h2>add a new</h2>

      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>

      <Persons
        personsToShow={personsToShow}
        deletePerson={deletePerson}
      />
    </div>
  )
}

export default App