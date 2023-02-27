import { CALL_API_ROUTE } from "../utils/LinkApi";

export async function getAllPokemon(currentPageUrl) {
  const result = await fetch(currentPageUrl);
  //const result = await fetch(`${CALL_API_ROUTE}pokemon?limit=151&offset=0`);

  const jsonResult = await result.json();

  const transformedData = [];

  console.log(jsonResult);

  for (let data of jsonResult.results) {
    let result = await GetPokeomData(data.url);
    let pokemonObject = {
      name: result.name,
      ...result,
    };
    transformedData.push(pokemonObject);
  }
  return {
    next: jsonResult.next,
    previous: jsonResult.previous,
    list: transformedData,
  };
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
  const result = await fetch(`${CALL_API_ROUTE}pokemon/${pokemonName}`);

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
    `${CALL_API_ROUTE}pokemon-species/${pokemonName}`
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
  //Using linked list to get all the evolution chain
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

export async function GetPokemonSpecies(pokemonName) {
  const response = await fetch(
    `${CALL_API_ROUTE}pokemon-species/${pokemonName}`
  );

  const jsonResult = await response.json();

  if (!response.ok) {
    throw new Error("No se pudo obtener los datos");
  }

  return { ...jsonResult };
}
