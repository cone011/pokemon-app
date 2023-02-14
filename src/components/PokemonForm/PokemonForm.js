import { Fragment } from "react";
import PokeHead from "../PokeHead/PokeHead";
import PokemonBody from "../PokemonBody/PokemonBody";
import PokeStats from "../PokeStats/PokeStats";
import classes from "./PokemonForm.module.css";

const PokemonForm = (props) => {
  const { pokemonObject } = props;
  return (
    <Fragment>
      <PokeHead pokemonObject={pokemonObject} />
      <PokemonBody pokemonObject={pokemonObject} />
      <PokeStats stats={pokemonObject.stats} />
    </Fragment>
  );
};

export default PokemonForm;
