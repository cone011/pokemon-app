import { useCallback, useEffect, useState, useReducer, Fragment } from "react";
import PokemonList from "../PokemonList/PokemonList";
import ShowMessage from "../UI/ShowMessage/ShowMessage";
import Header from "../UI/Header/Header";
import { getAllPokemon } from "../../api/api";
import Pagination from "../UI/Pagination/Pagination";

const loadingReducer = (curLoading, action) => {
  switch (action.type) {
    case "BEGIN":
      return {
        isShow: true,
        error: false,
        typeForm: action.typeForm,
        message: null,
        previous: null,
        next: null,
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
      return {
        ...curLoading,
        isShow: false,
        previous: action.previous,
        next: action.next,
      };
    default:
      throw new Error("No se puede realizar esta accion porque no existe");
  }
};

const StartingPage = () => {
  const [list, setList] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [reducerLoading, dispatchLoading] = useReducer(loadingReducer, {
    isShow: false,
    error: false,
    typeForm: null,
    message: null,
    previous: null,
    next: null,
  });

  const onLoadingPokemonData = useCallback(async () => {
    try {
      dispatchLoading({ type: "BEGIN", typeForm: "LOADING" });
      let result = await getAllPokemon(currentPageUrl);
      if (result.list.length <= 0) {
        dispatchLoading({
          type: "ERROR",
          message: "ERROR No se pudo obtener ningun pokemon",
        });
      }
      setList(result.list);
      dispatchLoading({
        type: "END",
        previous: result.previous,
        next: result.next,
      });
    } catch (err) {
      dispatchLoading({
        type: "ERROR",
        typeForm: "ERROR",
        message: `err: ${err}`,
      });
    }
  }, [currentPageUrl]);

  useEffect(() => {
    onLoadingPokemonData();
  }, [onLoadingPokemonData]);

  const onModalHandler = () => {
    dispatchLoading({ type: "END" });
  };

  const gotoNextPage = () => {
    setCurrentPageUrl(reducerLoading.next);
  };

  const gotoPrevPage = () => {
    setCurrentPageUrl(reducerLoading.previous);
  };

  return (
    <Fragment>
      <div>
        <Header />
        <PokemonList listPokemon={list} />
        <Pagination
          gotoNextPage={reducerLoading.next ? gotoNextPage : null}
          gotoPrevPage={reducerLoading.previous ? gotoPrevPage : null}
        />
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
