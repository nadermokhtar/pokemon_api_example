import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";
import { pokemonList } from "../constants/ListOfPokemon";

const pokemonOptions = pokemonList.map((pokemon, index) => {
  return {
    key: pokemon,
    text: pokemon,
    value: pokemon,
    image: {
      avatar: true,
      src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        index + 1
      }.png`,
    },
  };
});

const PokemonPicker = ({ handlePick }) => {
  const [pick, setPick] = useState("");
  const handleChange = (e, obj) => {
    setPick(obj.value);
    handlePick(obj.value);
  };
  return (
    <Dropdown
      placeholder="Select A Pokemon"
      fluid
      selection
      value={pick}
      onChange={handleChange}
      options={pokemonOptions}
    />
  );
};

export default PokemonPicker;
