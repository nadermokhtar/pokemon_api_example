import React from "react";
import PokemonStats from "../componenets/PokemonStats";
const PokemonStatsContainer = ({ stats }) => {
  const listOfStats = stats.map((stat) => {
    return <PokemonStats stat={stat} />;
  });
  if (listOfStats === null) {
    return <>No stats to show</>;
  }
  return <>{listOfStats}</>;
};

export default PokemonStatsContainer;
