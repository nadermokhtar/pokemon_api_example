import React from "react";
import { Progress } from "semantic-ui-react";

const PokemonStats = ({ stat }) => (
  <Progress progress="value" value={stat.base_stat} total={225}>
    {stat.stat.name}
  </Progress>
);

export default PokemonStats;
