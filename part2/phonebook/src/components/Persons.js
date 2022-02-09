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
