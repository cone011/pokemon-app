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

export async function GetEvolutionPokemon(pokemonName) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`
  );

  const jsonResult = await response.json();

  if (!response.ok) {
    throw new Error("No se pudo obtener los datos");
  }

  let result = await GetEvolutionChain(jsonResult.evolution_chain.url);

  return result;
}

export async function GetEvolutionChain(url) {
  const response = await fetch(url);

  const valueEvolution = await response.json();

  const retrunEvolution = [];

  let evolution = valueEvolution.chain;
  while (evolution) {
    let resultEvolution = null;
    if (evolution.evolves_to.length === 0) {
      resultEvolution = await GetPokeomData(evolution.species.url);
      retrunEvolution.push({
        name: evolution.species.name,
        ...resultEvolution,
      });
      evolution = null;
    } else {
      resultEvolution = await GetPokeomData(evolution.species.url);
      retrunEvolution.push({
        name: evolution.species.name,
        ...resultEvolution,
      });
      evolution = evolution.evolves_to[0];
    }
  }

  if (!response.ok) {
    throw new Error("No se pudo obtener los datos");
  }

  return retrunEvolution;
}
