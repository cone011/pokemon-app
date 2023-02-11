import { Col, Container, Row } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import PokemonItem from "../PokemonItem/PokemonItem";
import SearchPokemon from "../SearchPokemon/SearchPokemon";

const PokemonList = (props) => {
  const { listPokemon } = props;
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
