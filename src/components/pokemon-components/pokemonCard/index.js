import React, { useEffect, useState } from "react";
import "./styles.scss";
import axios from "axios";

const PokemonCard = ({ name, url }) => {
  const [pokemonDetails, setPokemonDetails] = useState([]);

  // const fetchPokemonsDetailsList = (pokemonList) => {
  //   console.log(pokemonList);
  //   axios.get(pokemonList.url).then((response) => {
  //     console.log(response.data);
  //   setPost(response.data);
  //   });
  // };

  // useEffect(() => {
  //   fetchPokemonsDetailsList(url);
  // }, [fetchPokemonsDetailsList]);

  return (
    <div className="poke-card">
      <div className="poke-header">{name}</div>
    </div>
  );
};

export default PokemonCard;
