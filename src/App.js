import React, { useState, useEffect, useCallback } from "react";
import "./App.scss";
import DashBoard from "./components/Dashboard";
import Navbar from "./components/navbar";
import { getPokemonsData } from "./components/serviceApi";

const BASE_API = "https://pokeapi.co/api/v2/pokemon?limit=20";

const App = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loader, setLoader] = useState(true);
  const [loadMore, setLoadMore] = useState(BASE_API);

  const getAllPokemons = async () => {
    setLoader(true);
    const response = await getPokemonsData(loadMore);
    const data = await response.json();
    setLoadMore(data?.next);
    setAllPokemons([...allPokemons, ...data.results]);
    setLoader(false);
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
      {/* {showDashboard} */}
      <DashBoard
        allPokemons={allPokemons}
        setAllPokemons={setAllPokemons}
        handleLoader={handleLoader}
        loader={loader}
        setLoader={setLoader}
      />
    </div>
  );
};

export default App;
