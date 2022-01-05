import React from "react";
import PokemonCard from "./../pokemonCard";

import "./styles.scss";

const PokemonList = ({ allPokemons }) => {
  return (
    <div className="poke-list">
      {allPokemons.map((pokemon) => (
        <PokemonCard url={pokemon.url} name={pokemon.name} />
      ))}
    </div>
  );
};

export default PokemonList;
