import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import SoldierList from './SoldierList';
import axios from "axios";

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [soldierListDefault, setSoldierListDefault] = useState();
  const [soldierList, setSoldierList] = useState();

  const fetchData = async () => {
    return await axios('https://127.0.0.1:8000/users/all')
      .then(response => response.json())
      .then(data => {
         setSoldierList(data) 
         setSoldierListDefault(data)
       });}

  const updateInput = async (input) => {
     const filtered = soldierListDefault.filter(country => {
      return country.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setSoldierList(filtered);
  }

  useEffect( () => {fetchData()},[]);
	
  return (
    <>
      <h1>Soldier List</h1>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      <SoldierList soldierList={soldierList}/>
    </>
   );
}

export default SearchPage