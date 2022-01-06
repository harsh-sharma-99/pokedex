import React, { useCallback, useEffect, useState } from "react";
import { getIndividualPokemon } from "../../serviceApi";
import "./styles.scss";

const PokemonCard = ({ name, url }) => {
  const [pokemonDetails, setPokemonDetails] = useState([]);

  const fetchIndividualPokemon = useCallback(async () => {
    const response = await getIndividualPokemon(url);
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
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonDetails?.id}.png`}
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
