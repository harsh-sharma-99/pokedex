import React, { useCallback, useEffect, useState } from "react";
import "./styles.scss";

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

  console.log(pokemonDetails);
  return (
    <div className="poke-card">
      <div className="poke-header">{name}</div>
      {/* <div>{pokemonDetails?.abilities}</div> */}
    </div>
  );
};

export default PokemonCard;
