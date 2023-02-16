import { useEffect, useState, Fragment } from "react";
import { useCallback } from "react";
import { GetEvolutionPokemon, GetPokemonImage } from "../../api/api";
import classes from "./PokemonEvolution.module.css";
import CustomContainer from "../UI/CustomContainer/CustomContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const PokemonEvolution = (props) => {
  const { name } = props;
  const [listEvolution, setListEvolution] = useState([]);

  const assigmentValues = useCallback(async () => {
    let value = await GetEvolutionPokemon(name);
    setListEvolution(value);
  }, [name]);

  useEffect(() => {
    assigmentValues();
  }, [assigmentValues]);

  return (
    <CustomContainer classStyle={`${classes.containerEvolution} mt-4`}>
      <h4 className={`w-100 mb-4 ${classes.sectionTitle}`}>Evolution Line</h4>
      <div className="w-100 d-flex flex-column flex-md-row flex-wrap justify-content-between">
        {listEvolution.length > 0 &&
          listEvolution.map((item, key) => (
            <Fragment>
              <div key={key} className={classes.evolutionItem}>
                <figure>
                  <img
                    src={GetPokemonImage(item.id)}
                    className={classes.evolutionImage}
                    alt={item.name}
                  />
                </figure>
                <p className={classes.pokeName}>{item.name}</p>
                <p className={classes.pokeNumber}>
                  #{item.id.toString().padStart(3, "0")}
                </p>
              </div>
              {key < listEvolution.length - 1 && (
                <div className={classes.containterArow}>
                  <FontAwesomeIcon
                    className={classes.text}
                    icon={faArrowRight}
                  />
                </div>
              )}
            </Fragment>
          ))}
      </div>
    </CustomContainer>
  );
};

export default PokemonEvolution;
