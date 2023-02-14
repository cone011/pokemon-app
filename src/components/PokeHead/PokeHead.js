import CustomContainer from "../UI/CustomContainer/CustomContainer";
import classes from "./PokeHead.module.css";
import { GetPokemonImage } from "../../api/api";

const PokeHead = (props) => {
  const { pokemonObject } = props;
  return (
    <CustomContainer classStyle={`${classes.pokeHead} mb-4`}>
      <div>
        <div className={classes.pokeHeadCenter}>
          <h2 className={`${classes.pokeName} limit-text my-0`}>
            {pokemonObject.name}
          </h2>
          <p className={`${classes.pokeNumber} mb-0`}>#{pokemonObject.id}</p>
        </div>
        <figure className={`${classes.pokeHeadImg} position-relative my-4`}>
          <img
            alt={pokemonObject.name}
            title={pokemonObject.name}
            src={GetPokemonImage(pokemonObject.id)}
          />
        </figure>
      </div>
    </CustomContainer>
  );
};

export default PokeHead;
