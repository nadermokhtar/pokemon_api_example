import React from "react";
import { Label } from "semantic-ui-react";

const PokemonTypeLabel = ({ type }) => {
  return <Label as="a">{type.type.name}</Label>;
};

export default PokemonTypeLabel;
