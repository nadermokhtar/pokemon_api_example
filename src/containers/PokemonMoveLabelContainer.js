import React from "react";
import PokemonMoveLabel from "../componenets/PokemonMoveLabel";
const PokemonMoveLabelContainer = ({ moves }) => {
  const listOfMoves = moves.map((move) => {
    return <PokemonMoveLabel move={move} />;
  });
  if (listOfMoves === null) {
    return <>No Move to show</>;
  }
  return <>{listOfMoves}</>;
};

export default PokemonMoveLabelContainer;
