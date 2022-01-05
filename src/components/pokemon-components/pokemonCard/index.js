import React, { useCallback, useEffect, useState } from "react";
import "./styles.scss";
import axios from "axios";

const PokemonCard = ({ name, url }) => {
  const [pokemonDetails, setPokemonDetails] = useState([]);

  const fetchIndividualPokemon = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPokemonDetails(data);
  }, [url]);

  useEffect(() => {
    fetchIndividualPokemon();
  }, [fetchIndividualPokemon]);

  const showAbilities = () => {
    return pokemonDetails?.abilities?.map((a, idx) => (
      <li>{a.ability.name} </li>
    ));
  };

  const showPhotos = () => {
    return (
      <img
        style={{ width: "212px", height: "240px" }}
        src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonDetails?.id}.svg`}
        alt={`${pokemonDetails.name}`}
      />
    );
  };

  // console.log(pokemonDetails);
  return (
    <div className="poke-card">
      <div className="poke-header">{name}</div>
      {pokemonDetails && showAbilities()}
      {pokemonDetails && showPhotos()}
    </div>
  );
};

export default PokemonCard;
