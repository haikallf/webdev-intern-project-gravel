import React, { useEffect, useState } from "react";
import axios from "axios";
import { prefix } from "../utils/urls";
import PokemonCard from "../components/PokemonCard";
import "./Home.css";
import { capitalizeFirstLetter } from "../utils/functions";

function Home() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getAllPokemons();
  }, []);

  const getAllPokemons = async () => {
    const response = await axios.get(prefix + "/pokemon");
    if (response.data) {
      setPokemons(response.data.results);
    }
  };

  const getPokemonIdByUrl = (urls) => {
    let arr = urls.split("/");
    return arr[arr.length - 2];
  };

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
