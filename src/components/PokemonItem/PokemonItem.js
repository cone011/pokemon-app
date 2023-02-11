import classes from "./PokemonItem.module.css";
import { GetPokemonImage } from "../../api/api";
import CustomContainer from "../UI/CustomContainer/CustomContainer";
import CustomButton from "../UI/CustomButton/CustomButton";
import { useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const showDetailReducer = (curDetail, action) => {
  switch (action.type) {
    case "BEGIN":
      return {
        isShow: true,
        error: false,
        typeForm: action.typeForm,
        dataObject: action.dataObject,
        message: null,
      };
    case "ERROR":
      return {
        ...curDetail,
        isShow: false,
        error: true,
        typeForm: action.typeForm,
        message: action.message,
      };
    case "END":
      return { ...curDetail, isShow: false };
    default:
      throw new Error("No se puede realizar esta accion porque no existe");
  }
};

const PokemonItem = (props) => {
  const { pokemonObject } = props;
  const [reducerDetail, dispatchDetail] = useReducer(showDetailReducer, {
    isShow: false,
    error: false,
    typeForm: null,
    dataObject: null,
    message: null,
  });
  const onShowDetailPokemon = (eventValue) => {
    console.log(eventValue);
  };
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
      <CustomButton
        type="button"
        className="btn"
        onClickEvent={onShowDetailPokemon}
      >
        <FontAwesomeIcon icon={faBars} color="white" />
        Detail
      </CustomButton>
    </CustomContainer>
  );
};

export default PokemonItem;
