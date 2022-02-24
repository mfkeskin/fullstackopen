import React from "react";

const Persons = ({ namesToShow }) => {
  return (
    <ul>
      {namesToShow.map((person) => {
        return (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        );
      })}
    </ul>
  );
};

export default Persons;
