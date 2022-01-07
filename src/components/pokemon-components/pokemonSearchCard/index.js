import React from "react";

const PokemonSearchCard = ({ pokemon, error }) => {
  return error ? (
    <div style={{ marginTop: "200px", textAlign: "center" }}>
      No Pokemon Found...
    </div>
  ) : (
    <div>
      <div style={{ marginTop: "200px", textAlign: "center" }}>
        {pokemon.name}
      </div>
    </div>
  );
};

export default PokemonSearchCard;
