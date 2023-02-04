export async function getAllPokemon() {
  const result = await fetch("https://pokeapi.co/api/v2");

  const jsonResult = await result.json();

  console.log(jsonResult);
}

export async function getSearchPokemon(pokemonName) {
  const result = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );

  const jsonResult = await result.json();

  if (!result.ok) {
    throw new Error("No se pudo encontrar el pokemon ingresado");
  }

  console.log(jsonResult);
}
