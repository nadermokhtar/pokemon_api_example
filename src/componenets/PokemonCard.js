import React from "react";
import { Card, Image } from "semantic-ui-react";
import PokemonStatsContainer from "../containers/PokemonStatsContainer";
import PokemonMoveLabelContainer from "../containers/PokemonMoveLabelContainer";
import PokemonTypeLabelContainer from "../containers/PokemonTypeLabelContainer";

const PokemonCard = ({ pokemon }) => {
  console.log(pokemon);
  if (pokemon == null) {
    return <> pick a pokemon</>;
  }
  return (
    <Card>
      <Image src={pokemon.sprites.front_default} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{pokemon.name}</Card.Header>
      </Card.Content>
      <Card.Content>
        <PokemonStatsContainer stats={pokemon.stats} />
      </Card.Content>
      <Card.Content>
        <Card.Header>{pokemon.name} Types</Card.Header>
        <PokemonTypeLabelContainer types={pokemon.types} />
      </Card.Content>
      <Card.Content>
        <Card.Header>{pokemon.name} Moves</Card.Header>
        <PokemonMoveLabelContainer moves={pokemon.moves} />
      </Card.Content>
    </Card>
  );
};

export default PokemonCard;
