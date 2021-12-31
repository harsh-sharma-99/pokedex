import React, { useState, useEffect } from "react";
import "./App.scss";
import DashBoard from "./components/Dashboard";
import Navbar from "./components/navbar";

const App = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    " https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const createPokemonObject = (results) => {
    let finalArray = [];
    results.map(async (pokemon) => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      const data = await response.json();
      finalArray.push(data);
    });
    return finalArray;
  };

  const getAllPokemons = async () => {
    const response = await fetch(loadMore);
    const data = await response.json();

    const pokemons = createPokemonObject(data.results);
    setAllPokemons(pokemons);
  };

  const handleLoader = () => {
    // setLoadMore();
  };
  useEffect(() => {
    getAllPokemons();
  }, []);

  console.log(allPokemons);
  return (
    <div className="main-container">
      <Navbar />
      <DashBoard handleLoader={handleLoader} />
    </div>
  );
};

export default App;
