import { useState } from "react";
import { getSearchPokemon } from "../../api/api";
import classes from "./SearchPokemon.module.css";

const SearchPokemon = () => {
  const [searchPokemon, setSearchPokemon] = useState("");

  const onSearchPokemonHandler = async (event) => {
    event.preventDefault();
    if (!searchPokemon) {
      //raise error
    }
    let result = await getSearchPokemon(searchPokemon);
    console.log(result);
  };

  const onGetSearchInputValueHandler = (eventValue) => {
    setSearchPokemon(eventValue.target.value);
  };

  return (
    <form onSubmit={onSearchPokemonHandler}>
      <div>
        <input
          type="text"
          name="searchPokemon"
          value={searchPokemon}
          autoComplete="off"
          placeholder="Busca tu pokemon"
          onChange={onGetSearchInputValueHandler}
        />
        <button type="submit" className="btn">
          Buscar
        </button>
      </div>
    </form>
  );
};

export default SearchPokemon;
