import classes from "./PokemonItem.module.css";
import { GetPokemonImage } from "../../api/api";
import CustomContainer from "../UI/CustomContainer/CustomContainer";

const PokemonItem = (props) => {
  const { pokemonObject } = props;
  return (
    <CustomContainer classStyle={`${classes.containerCard} mb-4`}>
      <div>
        <div className={classes.textCenter}>
          <h2 className={classes.pokemonName}>{pokemonObject.name}</h2>
          <p className={classes.pokemonNumber}>
            # {pokemonObject.id.toString().padStart(3, "0")}
          </p>
        </div>
      </div>
      <figure className={classes.containerCardImg}>
        <img
          alt={pokemonObject.name}
          title={pokemonObject.name}
          src={GetPokemonImage(pokemonObject.id)}
        />
      </figure>
    </CustomContainer>
  );
};

export default PokemonItem;
