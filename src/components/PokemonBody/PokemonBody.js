import classes from "./PokemonBody.module.css";
import CustomContainer from "../UI/CustomContainer/CustomContainer";

const PokemonBody = (props) => {
  const { pokemonObject } = props;
  return (
    <CustomContainer
      classStyle={`${classes.containerInfo} d-flex flex-wrap my-4`}
    >
      <div className={classes.infoItem}>
        <h4>Heigth</h4>
        <p>{Math.round(pokemonObject.height * 10) / 100} m</p>
      </div>
      {/* <div className={classes.infoItem}>
        <h4>Capture Rate</h4>
        <p>{Math.round(pokemonObject.capture_rate * 10) / 100} %</p>
      </div> */}
      <div className={classes.infoItem}>
        <h4>Weigth</h4>
        <p>{Math.round(pokemonObject.weight * 10) / 100} Kg</p>
      </div>
    </CustomContainer>
  );
};

export default PokemonBody;
