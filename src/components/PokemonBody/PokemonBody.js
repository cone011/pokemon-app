import classes from "./PokemonBody.module.css";
import CustomContainer from "../UI/CustomContainer/CustomContainer";
import { useCallback, useEffect, useState } from "react";
import { GetPokemonSpecies } from "../../api/api";
import { recursiveAbilities } from "../../utils/RecursiveAbilities";

const PokemonBody = (props) => {
  const { pokemonObject } = props;
  const [dataPokemon, setDataPokemon] = useState({});
  const assigmentValues = useCallback(async () => {
    let result = await GetPokemonSpecies(pokemonObject.name);
    let abilities = recursiveAbilities(pokemonObject.abilities);
    var pokemonData = {
      id: pokemonObject.id,
      name: pokemonObject.name,
      types: pokemonObject.types,
      height: pokemonObject.height,
      weight: pokemonObject.weight,
      captureRate: result.capture_rate,
      habitat: result.habitat?.name,
      abilities: abilities,
    };
    setDataPokemon(pokemonData);
  }, [pokemonObject]);
  useEffect(() => {
    assigmentValues();
  }, [assigmentValues]);
  return (
    <CustomContainer
      classStyle={`${classes.containerInfo} d-flex flex-wrap my-4`}
    >
      <div className={classes.infoItem}>
        <h4>Heigth</h4>
        <p>{Math.round(dataPokemon.height * 10) / 100} m</p>
      </div>
      <div className={classes.infoItem}>
        <h4>Capture Rate</h4>
        <p>{Math.round(dataPokemon.captureRate * 10) / 100} %</p>
      </div>
      <div className={classes.infoItem}>
        <h4>Weigth</h4>
        <p>{Math.round(dataPokemon.weight * 10) / 100} Kg</p>
      </div>
      <div className={classes.infoItem}>
        <h4>habitat</h4>
        <p>{dataPokemon.habitat ? dataPokemon.habitat : ""}</p>
      </div>
      <div className={classes.infoItem}>
        <h4>Abilities</h4>
        <p>{dataPokemon.abilities ? dataPokemon.abilities : ""}</p>
      </div>
    </CustomContainer>
  );
};

export default PokemonBody;
