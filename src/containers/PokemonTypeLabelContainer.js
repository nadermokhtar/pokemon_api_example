import React from "react";
import PokemonTypeLabel from "../componenets/PokemonTypeLabel";
const PokemonTypeLabelContainer = ({ types }) => {
  const listOfTypes = types.map((type) => {
    return <PokemonTypeLabel type={type} />;
  });
  if (listOfTypes === null) {
    return <>No Types to show</>;
  }
  return <>{listOfTypes}</>;
};

export default PokemonTypeLabelContainer;
