import React, { useState } from "react";
import "./styles.scss";
import PokemonList from "./../pokemon-components/pokemonList/index";
import Search from "../Search";
import { searchPokemons } from "../serviceApi";

const DashBoard = ({ allPokemons, handleLoader, loader, setLoader }) => {
  const handleSearch = (query) => {
    setLoader(true);
    console.log(query);
    // searchPokemons;
    setLoader(false);
  };

  return (
    <div className="dashboard-wrapper">
      <Search handleSearch={handleSearch} />
      {loader ? (
        <div>Loading ...</div>
      ) : (
        <PokemonList allPokemons={allPokemons} />
      )}
      <button onClick={handleLoader} className="load-button">
        Load More
      </button>
    </div>
  );
};

export default DashBoard;
