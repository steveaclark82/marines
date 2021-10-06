import React, { useState } from 'react';

function SearchPage() {

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredName, setFilteredName] = useState("");

  const people = [
    "Summerfield",
    "Dodson",
    "Engle",
    "Smith",
    "Clark"
  ];

  const displayNames = people.map((person) =>{
    return (
      <li>{person}</li>
    )
  })

  function handleSearch(newSearchQuery) {
    setSearchQuery(newSearchQuery);
    people.map((person) => {
      if (person.includes(searchQuery)) {
        setFilteredName(person)
      }
    })
  }

  return (
    <div className="SearchPage">
      <Search handleSearch={handleSearch} />
      <h2>Soldiers Name:
          <ul style={{color: "red"}}>
            {filteredName}
          </ul>
      </h2>
      <br></br>
        <ul/>
    </div>
  );
}

function Search({handleSearch}) {

  function onChange(e) {
    handleSearch(e.target.value);
  }

  return (
    <div>
      <label>Search</label>
      <input type="text" onChange={onChange} />
    </div>
  );
}

export default SearchPage