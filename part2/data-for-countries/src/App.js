import React, { useEffect, useState } from "react";
import axios from "axios";

const Countries = ({ countriesToShow }) => {
  return (
    <ul>
      {countriesToShow.map((country) => {
        return <li key={country.car.ccn3}>{country.name.common}</li>;
      })}
    </ul>
  );
};

const Country = ({ countriesToShow }) => {
  return (
    <div>
      <h2>{countriesToShow[0].name.common}</h2>
      <p>
        capital {countriesToShow[0].capital[0]}
        <br></br>
        area {countriesToShow[0].area}
      </p>

      <h3>languages:</h3>
      <ul>
        {Object.keys(countriesToShow[0].languages).map((key) => (
          <li key={key}>{countriesToShow[0].languages[key]}</li>
        ))}
      </ul>

      <img
        src={countriesToShow[0].flags.png}
        alt={countriesToShow[0].name.common + "'s flag"}
      ></img>
    </div>
  );
};

const toShow = (countriesToShow) => {
  if (countriesToShow.length === 1) {
    return <Country countriesToShow={countriesToShow} />;
  } else if (countriesToShow.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else {
    return <Countries countriesToShow={countriesToShow} />;
  }
};

const App = () => {
  const [countries, setCountries] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  const countriesToShow = countries.filter(
    (country) => country.name.common.toLowerCase().includes(keyword) === true
  );

  return (
    <div>
      find countries
      <input value={keyword} onChange={handleKeywordChange} />
      {toShow(countriesToShow)}
    </div>
  );
};

export default App;
