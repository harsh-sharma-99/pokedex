import React, { useState } from "react";

const Search = ({ handleSearch }) => {
  const [query, searchQuery] = useState();
  const searchPokemon = (e) => {
    handleSearch(e.target.value.toLowerCase());
  };
  return (
    <input
      className="searchbar"
      value={query}
      onChange={searchPokemon}
      type="text"
      placeholder="Search Pokemon by id or name"
    ></input>
  );
};

export default Search;
