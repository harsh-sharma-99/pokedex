import React, { useState } from "react";
import "./styles.scss";
import PokemonList from "./../pokemon-components/pokemonList/index";
import Search from "../search";
import { searchPokemons } from "../serviceApi";
import PokemonSearchCard from "../pokemon-components/pokemonSearchCard";
import { useEffect } from "react/cjs/react.development";

const DashBoard = ({ allPokemons, setAllPokemons, handleLoader, loader }) => {
  const [error, setError] = useState(true);
  const [searchCardData, setSearchCardData] = useState();

  //search function to call Apis
  const handleSearch = async (value) => {
    if (value !== "") {
      const response = await searchPokemons(value).catch((err) => {
        //wrong search guard condition
        if (err.response.status !== 200) {
          setError(true);
          setSearchCardData(true);
        }
      });
      if (response) {
        setError(false);
        //setting search data for serached pokemon
        setSearchCardData(response.data);
      }
    }
    //empty input value guard condition
    else if (value === "") {
      setSearchCardData(undefined);
    }
  };

  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search === "") {
      setSearchCardData(undefined);
    }
  }, [search]);

  return (
    <div className="dashboard-wrapper">
      <Search handleSearch={handleSearch} setSearch={setSearch} />

      {searchCardData ? (
        <PokemonSearchCard error={error} pokemon={searchCardData} />
      ) : (
        <div className="pokeList-wrapper">
          <PokemonList allPokemons={allPokemons} />
          <button onClick={handleLoader} className="load-button">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default DashBoard;
