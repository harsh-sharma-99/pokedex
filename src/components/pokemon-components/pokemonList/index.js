import React from "react";
import PokemonCard from "./../pokemonCard";

import "./styles.scss";

const PokemonList = ({ allPokemons, loader }) => {
  return (
    <div className="poke-wrapper">
      <div className="poke-list">
        {allPokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} />
        ))}
      </div>
      {loader && <div className="poke-loader">Loading....</div>}
    </div>
  );
};

export default PokemonList;
