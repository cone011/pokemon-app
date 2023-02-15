import { useCallback, useEffect, useState, useReducer, Fragment } from "react";
import PokemonList from "../PokemonList/PokemonList";
import ShowMessage from "../UI/ShowMessage/ShowMessage";
import Header from "../UI/Header/Header";
import { getAllPokemon } from "../../api/api";

const loadingReducer = (curLoading, action) => {
  switch (action.type) {
    case "BEGIN":
      return {
        isShow: true,
        error: false,
        typeForm: action.typeForm,
        message: null,
      };
    case "ERROR":
      return {
        ...curLoading,
        isShow: false,
        error: true,
        typeForm: action.typeForm,
        message: action.message,
      };
    case "END":
      return { ...curLoading, isShow: false };
    default:
      throw new Error("No se puede realizar esta accion porque no existe");
  }
};

const StartingPage = () => {
  const [list, setList] = useState([]);
  const [reducerLoading, dispatchLoading] = useReducer(loadingReducer, {
    isShow: false,
    error: false,
    typeForm: null,
    message: null,
  });

  const onLoadingPokemonData = useCallback(async () => {
    try {
      dispatchLoading({ type: "BEGIN", typeForm: "LOADING" });
      let result = await getAllPokemon();
      if (result.length <= 0) {
        dispatchLoading({
          type: "ERROR",
          message: "ERROR No se pudo obtener ningun pokemon",
        });
      }
      setList(result);
      dispatchLoading({ type: "END" });
    } catch (err) {
      dispatchLoading({
        type: "ERROR",
        typeForm: "ERROR",
        message: `err: ${err}`,
      });
    }
  }, []);

  useEffect(() => {
    onLoadingPokemonData();
  }, [onLoadingPokemonData]);

  const onModalHandler = () => {
    dispatchLoading({ type: "END" });
  };

  return (
    <Fragment>
      <div>
        <Header />
        <PokemonList listPokemon={list} />
      </div>
      {reducerLoading.isShow && (
        <ShowMessage
          showModal={reducerLoading.isShow}
          typeMessage={reducerLoading.typeForm}
        />
      )}
      {reducerLoading.error && (
        <ShowMessage
          showModal={reducerLoading.error}
          typeMessage={reducerLoading.typeForm}
          modalHandler={onModalHandler}
          message={reducerLoading.message}
        />
      )}
    </Fragment>
  );
};

export default StartingPage;
