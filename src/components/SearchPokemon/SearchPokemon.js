import { useState } from "react";
import { getSearchPokemon } from "../../api/api";
import classes from "./SearchPokemon.module.css";
import CustomContainer from "../UI/CustomContainer/CustomContainer";
import CustomButton from "../UI/CustomButton/CustomButton";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchPokemon = () => {
  const [searchPokemon, setSearchPokemon] = useState("");

  const onSearchPokemonHandler = async (event) => {
    event.preventDefault();
    console.log(searchPokemon);
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
    <CustomContainer classStyle={`${classes.containerSearch} mb-4`}>
      <form onSubmit={onSearchPokemonHandler}>
        <div className={classes.searchForm}>
          <input
            type="text"
            name="searchPokemon"
            value={searchPokemon}
            autoComplete="off"
            placeholder="Busca tu pokemon"
            onChange={onGetSearchInputValueHandler}
          />
          <CustomButton className={classes.btnClearInput} typeButton="submit">
            <FontAwesomeIcon icon={faSearch} />
          </CustomButton>
        </div>
      </form>
    </CustomContainer>
  );
};

export default SearchPokemon;
