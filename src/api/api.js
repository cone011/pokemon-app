export async function getAllPokemon() {
  const result = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=500&offset=0"
  );

  const jsonResult = await result.json();

  const transformedData = [];

  for (let data of jsonResult.results) {
    let result = await GetPokeomData(data.url);
    let pokemonObject = {
      name: result.name,
      ...result,
    };
    transformedData.push(pokemonObject);
  }
  return transformedData;
}

export async function GetPokeomData(urlData) {
  const result = await fetch(urlData);

  const jsonResult = await result.json();
  if (!result.ok) {
    throw new Error("No se pudo obtener la informacion de este pokemon");
  }

  return { ...jsonResult };
}

export async function getSearchPokemon(pokemonName) {
  const result = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );

  const jsonResult = await result.json();

  if (!result.ok) {
    throw new Error("No se pudo encontrar el pokemon ingresado");
  }

  return { ...jsonResult };
}

export function GetPokemonImage(idPokemon) {
  let idImage = idPokemon.toString().padStart(3, "0");
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${idImage}.png`;
}
