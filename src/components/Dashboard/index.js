import React from "react";
import "./styles.scss";
import PokemonList from "./../pokemon-components/pokemonList/index";

const DashBoard = () => {
  return (
    <div className="dashboard-wrapper">
      <PokemonList />
    </div>
  );
};

export default DashBoard;
