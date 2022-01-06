const baseUrl = "https://pokeapi.co/api/v2";
const query = {
  pokemon: "pokemon",
};

//Api call to get data for 20 pokemons
export async function getPokemonsData(url) {
  try {
    return fetch(url);
  } catch (error) {
    console.log(error);
  }
}

//Api call to fetch each pokemon
export async function getIndividualPokemon(url) {
  try {
    return fetch(url);
  } catch (error) {
    console.log(error);
  }
}

export async function searchPokemons(pokemon) {
  try {
    return await fetch(`${baseUrl}/${query.pokemon}/${pokemon}`);
  } catch (error) {
    console.log(error);
  }
}
