import { useCallback, useEffect, useReducer, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import PokemonItem from "../PokemonItem/PokemonItem";
import SearchPokemon from "../SearchPokemon/SearchPokemon";
const loadingReducer = (curLoading, action) => {
  switch (action.type) {
    case "BEGIN":
      return { isShow: true, error: false, message: null };
    case "ERROR":
      return { isShow: false, error: true, message: action.message };
    case "END":
      return { ...curLoading, isShow: false };
    default:
      throw new Error("No se puede realizar esta accion porque no existe");
  }
};

const PokemonList = (props) => {
  const { listPokemon } = props;
  const [reducerLoading, dispatchLoading] = useReducer(loadingReducer, {
    isShow: false,
    error: false,
    message: null,
  });

  const onModalHandler = () => {
    dispatchLoading({ type: "END  " });
  };

  return (
    <div>
      <SearchPokemon />
      <Container fluid>
        <InfiniteScroll
          style={{ overflow: "none" }}
          dataLength={listPokemon.length}
        >
          <Row>
            {listPokemon.map((item) => (
              <Col key={item.id} xs={12} sm={6} lg={3}>
                <PokemonItem pokemonObject={item} />
              </Col>
            ))}
          </Row>
        </InfiniteScroll>
      </Container>
    </div>
  );
};

export default PokemonList;
