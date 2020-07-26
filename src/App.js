import React, { useState } from "react";
import PokemonCard from "./componenets/PokemonCard";
import PokemonPicker from "./componenets/PokemonPicker";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const handlePick = (pick) => {
    let choice = pick.toLowerCase();
    let url = `https://pokeapi.co/api/v2/pokemon/${choice}`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((response) => response.json())
      .then((body) => {
        setPokemon(body);
      });
  };

  return (
    <div className="App">
      <PokemonPicker handlePick={handlePick} />
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

export default App;
