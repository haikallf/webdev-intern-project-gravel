import React, { useEffect, useState } from "react";
import axios from "axios";
import { prefix } from "../utils/urls";
import PokemonCard from "../components/PokemonCard";
import "./Home.css";

function Home() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    retrievePokemons();
  }, []);

  const retrievePokemons = async () => {
    const response = await axios.get(prefix + "/pokemon");
    if (response.data) {
      setPokemons(response.data.results);
    }
  };

  const getPokemonIdByUrl = (urls) => {
    let arr = urls.split("/");
    return arr[arr.length - 2];
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="pokemonCards__container">
      <div className="pokemonCards">
        {pokemons?.map((pokemon) => (
          <PokemonCard
            name={capitalizeFirstLetter(pokemon?.name)}
            id={getPokemonIdByUrl(pokemon?.url)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
