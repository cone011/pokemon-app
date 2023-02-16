import { useEffect, useState, useReducer, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import PokemonItem from "../PokemonItem/PokemonItem";
import SearchPokemon from "../SearchPokemon/SearchPokemon";
import ShowMessage from "../UI/ShowMessage/ShowMessage";

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

const PokemonList = (props) => {
  const { listPokemon } = props;
  const [pokemonList, setPokemonList] = useState([]);

  const [reducerLoading, dispatchLoading] = useReducer(loadingReducer, {
    isShow: false,
    error: false,
    typeForm: null,
    message: null,
  });
  useEffect(() => {
    setPokemonList(listPokemon);
  }, [listPokemon]);
  const onFilterPokemon = (listFilter) => {
    dispatchLoading({ type: "BEGIN", typeForm: "LOADING" });
    setPokemonList(listFilter);
    dispatchLoading({ type: "END" });
  };
  return (
    <Fragment>
      <div>
        <SearchPokemon
          PokemonList={listPokemon}
          onReturnValueSearch={onFilterPokemon}
        />
        <Container fluid>
          <InfiniteScroll
            style={{ overflow: "none" }}
            dataLength={pokemonList.length}
          >
            <Row>
              {pokemonList.map((item) => (
                <Col key={item.id} xs={12} sm={6} lg={3}>
                  <PokemonItem pokemonObject={item} />
                </Col>
              ))}
            </Row>
          </InfiniteScroll>
        </Container>
      </div>
      {reducerLoading.isShow && (
        <ShowMessage
          showModal={reducerLoading.isShow}
          typeMessage={reducerLoading.typeForm}
        />
      )}
    </Fragment>
  );
};

export default PokemonList;
