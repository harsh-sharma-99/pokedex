import React, { useEffect } from "react";
import PokemonCard from "./../pokemonCard";
import "./styles.scss";

const renderList = (allPokemons) =>
  allPokemons?.map((pokemon) => <PokemonCard pokemon={pokemon} />);

const PokemonList = ({ allPokemons }) => {
  console.log(allPokemons);

  return (
    <div className="poke-list">
      {allPokemons.map(() => (
        <PokemonCard />
      ))}
    </div>
  );
};

export default PokemonList;
