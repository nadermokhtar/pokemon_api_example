import React from "react";
import { Label } from "semantic-ui-react";

const PokemonMoveLabel = ({ move }) => {
  return <Label as="a">{move.move.name}</Label>;
};

export default PokemonMoveLabel;
