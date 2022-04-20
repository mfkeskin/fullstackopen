import React, { useEffect, useState } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import personsServices from "./services/person";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newKeyword, setKeyword] = useState("");

  useEffect(() => {
    personsServices.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleDeletePerson = (id, name) => {
    const confirm = window.confirm(`Delete ${name} ?`);
    confirm ? personsServices.deletePerson(id) : alert("Canceled");
  };

  const addPerson = (event) => {
    event.preventDefault();
    const personsObject = {
      name: newName,
      number: newNumber,
      id: persons.reduce((a, b) => (a.id > b.id ? a : b)).id + 1,
    };

    persons.map((person) => person.name === newName).indexOf(true) > -1
      ? alert(`${newName} already added to phonebook`)
      : personsServices.create(personsObject).then((response) => {
          setPersons(persons.concat(response.data));
        });
    setNewName("");
    setNewNumber("");
  };

  const namesToShow =
    newKeyword === ""
      ? persons
      : persons.filter(
          (person) => person.name.toLowerCase() === newKeyword.toLowerCase()
        );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        newKeyword={newKeyword}
        handleKeywordChange={handleKeywordChange}
      />

      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumChange={handleNumChange}
        addPerson={addPerson}
      />
      <h2>Numbers</h2>
      <ul>
        {namesToShow.map((person) => (
          <Persons
            key={person.id}
            person={person}
            handleDeletePerson={() =>
              handleDeletePerson(person.id, person.name)
            }
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
