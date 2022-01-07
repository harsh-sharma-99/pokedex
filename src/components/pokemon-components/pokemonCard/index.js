import React, { useCallback, useEffect, useState } from "react";
import { getIndividualPokemon } from "../../serviceApi";
import "./styles.scss";

const PokemonCard = ({ pokemon }) => {
  const [pokemonDetails, setPokemonDetails] = useState([]);

  const fetchIndividualPokemon = useCallback(async () => {
    const response = await getIndividualPokemon(pokemon?.url);
    const data = await response.json();
    setPokemonDetails(data);
  }, [pokemon]);

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
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonDetails?.id}.png`}
        alt={`${pokemonDetails.name}`}
      />
    );
  };

  return (
    <div className="poke-card">
      <div className="poke-header">{pokemon?.name}</div>
      {pokemonDetails && showAbilities()}
      {pokemonDetails && showPhotos()}
    </div>
  );
};

export default PokemonCard;
