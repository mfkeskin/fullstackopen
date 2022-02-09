import React, { useState } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newKeyword, setKeyword] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const personsObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    persons.map((person) => person.name === newName).indexOf(true) > -1
      ? alert(`${newName} already added to phonebook`)
      : setPersons(persons.concat(personsObject));
    setNewName("");
    setNewNumber("");
  };

  const namesToShow =
    newKeyword === ""
      ? persons
      : persons.filter(
          (person) => person.name.toLowerCase() === newKeyword.toLowerCase()
        );
  console.log(newKeyword);
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
      <Persons namesToShow={namesToShow} />
    </div>
  );
};

export default App;
