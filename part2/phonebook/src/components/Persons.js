import React from "react";

const Persons = ({ person, handleDeletePerson }) => {
  return (
    <li>
      {person.name} {person.number}
      <button onClick={handleDeletePerson}>delete</button>
    </li>
  );
};

export default Persons;
