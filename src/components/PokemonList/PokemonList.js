import classes from "./PokemonList.module.css";
import SearchPokemon from "../SearchPokemon/SearchPokemon";
import { Fragment } from "react";

const PokemonList = () => {
  return (
    <Fragment>
      <SearchPokemon />
      <h1>Hola</h1>
    </Fragment>
  );
};

export default PokemonList;
