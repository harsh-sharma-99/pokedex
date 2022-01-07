import React, { useState } from "react";
import "./styles.scss";

const Search = ({ handleSearch, setSearch }) => {
  const [value, setValue] = useState("");
  return (
    <div className="">
      <input
        className="searchbar"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setSearch(e.target.value);
        }}
        type="text"
        placeholder="Search Pokemon by name"
      />
      <button onClick={() => handleSearch(value)}>Search</button>
    </div>
  );
};

export default Search;
