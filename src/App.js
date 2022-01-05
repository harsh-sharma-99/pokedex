import React, { useState, useEffect } from "react";
import "./App.scss";
import DashBoard from "./components/Dashboard";
import Navbar from "./components/navbar";

const App = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    " https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getAllPokemons = async () => {
    const response = await fetch(loadMore);
    const data = await response.json();
    setLoadMore(data?.next);
    setAllPokemons((prev) => [...prev, ...data.results]);
  };

  const handleLoader = () => {
    getAllPokemons();
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="main-container">
      <Navbar />
      <DashBoard allPokemons={allPokemons} handleLoader={handleLoader} />
    </div>
  );
};

export default App;
