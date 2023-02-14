import { useEffect } from "react";
import { useCallback } from "react";
import { GetEvolutionPokemon } from "../../api/api";
import classes from "./PokemonEvolution.module.css";

const PokemonEvolution = (props) => {
  const { name } = props;

  const assigmentValues = useCallback(async () => {
    let resultPokemon = await GetEvolutionPokemon(name);
  }, [name]);

  useEffect(() => {
    assigmentValues();
  }, [assigmentValues]);
};

export default PokemonEvolution;
