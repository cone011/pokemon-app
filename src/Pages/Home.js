import PokemonList from "../components/PokemonList/PokemonList";
import Header from "../components/UI/Header/Header";
import { getAllPokemon } from "../api/api";
import { useCallback, useEffect, useState } from "react";

const Home = () => {
  const [list, setList] = useState([]);
  const onLoadingPokemonData = useCallback(async () => {
    try {
      let result = await getAllPokemon();
      if (result.length <= 0) {
        // dispatchLoading({
        //   type: "ERROR",
        //   message: "ERROR No se pudo obtener ningun pokemon",
        // });
      }
      setList(result);
    } catch (err) {
      //dispatchLoading({ type: "ERROR", message: `Error: ${err}` });
    }
  }, []);

  useEffect(() => {
    onLoadingPokemonData();
  }, [onLoadingPokemonData]);
  return (
    <div>
      <Header />
      <PokemonList listPokemon={list} />
    </div>
  );
};

export default Home;
