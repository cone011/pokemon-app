import { Fragment } from "react";
import PokeHead from "../PokeHead/PokeHead";
import PokemonBody from "../PokemonBody/PokemonBody";
import PokemonEvolution from "../PokemonEvolution/PokemonEvolution";
import PokeStats from "../PokeStats/PokeStats";

const PokemonForm = (props) => {
  const { pokemonObject } = props;
  console.log(pokemonObject);
  return (
    <Fragment>
      <PokeHead pokemonObject={pokemonObject} />
      <PokemonBody pokemonObject={pokemonObject} />
      <PokeStats stats={pokemonObject.stats} />
      <PokemonEvolution name={pokemonObject.name} />
    </Fragment>
  );
};

export default PokemonForm;
