import PokemonList from "../PokemonList/PokemonList";
import { Route, Routes } from "react-router-dom";

const RoutesFiles = () => {
  return (
    <Routes>
      <Route path="/" element={<PokemonList />} />
    </Routes>
  );
};

export default RoutesFiles;
