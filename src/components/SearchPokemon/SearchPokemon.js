import { useState } from "react";
import classes from "./SearchPokemon.module.css";
import CustomContainer from "../UI/CustomContainer/CustomContainer";
import CustomButton from "../UI/CustomButton/CustomButton";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchPokemon = (props) => {
  const { PokemonList, onReturnValueSearch } = props;
  const [searchPokemon, setSearchPokemon] = useState("");

  const onClearFilter = () => {
    setSearchPokemon("");
    onReturnValueSearch(PokemonList);
  };

  const onGetSearchInputValueHandler = (eventValue) => {
    setSearchPokemon(eventValue.target.value);
    let valueSearched = eventValue.target.value.toLowerCase();
    let result = PokemonList.filter((item) =>
      item.name.toLowerCase().includes(valueSearched)
    );
    onReturnValueSearch(result);
  };

  return (
    <CustomContainer classStyle={`${classes.containerSearch} mb-4`}>
      <div className={classes.searchForm}>
        <input
          type="text"
          name="searchPokemon"
          value={searchPokemon}
          autoComplete="off"
          placeholder="Busca tu pokemon"
          onChange={onGetSearchInputValueHandler}
        />
        <CustomButton
          className={classes.btnClearInput}
          typeButton="button"
          onClickEvent={onClearFilter}
        >
          <FontAwesomeIcon icon={faClose} />
        </CustomButton>
      </div>
    </CustomContainer>
  );
};

export default SearchPokemon;
