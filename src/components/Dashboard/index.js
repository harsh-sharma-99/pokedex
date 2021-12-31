import React from "react";
import "./styles.scss";
import PokemonList from "./../pokemon-components/pokemonList/index";

const DashBoard = ({ handleLoader }) => {
  return (
    <div className="dashboard-wrapper">
      <input
        className="searchbar"
        type="text"
        placeholder="Search Pokemon by id or name"
      ></input>
      <PokemonList />
      <button onClick={handleLoader} className="load-button">
        Load More
      </button>
    </div>
  );
};

export default DashBoard;
