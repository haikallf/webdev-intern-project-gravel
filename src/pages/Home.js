import React, { useEffect, useState } from "react";
import axios from "axios";
import { prefix } from "../utils/urls";
import PokemonCard from "../components/PokemonCard";
import "./Home.css";
import { capitalizeFirstLetter } from "../utils/functions";
import Pagination from "../components/Pagination";
import { useNavigate, useParams } from "react-router-dom";

function Home() {
  let { page } = useParams();
  const navigate = useNavigate();
  const limit = 12;

  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    if (page < 1) {
      navigate("/1");
    }
    getAllPokemons();
  }, [page]);

  const getAllPokemons = async () => {
    const offset = (page < 1 ? 0 : page ? page - 1 : 0) * limit;
    const response = await axios.get(
      prefix + `/pokemon?offset=${offset}&limit=${limit}`
    );
    if (response.data) {
      setPokemons(response.data.results);
    }
  };

  const getPokemonIdByUrl = (urls) => {
    const arr = urls.split("/");
    return arr[arr.length - 2];
  };

  return (
    <div className="pokemonCards__container">
      <div className="pokemonCards">
        {pokemons?.map((pokemon, idx) => (
          <PokemonCard
            name={capitalizeFirstLetter(pokemon?.name)}
            id={getPokemonIdByUrl(pokemon?.url)}
            key={idx}
          />
        ))}
      </div>
      <Pagination page={page} />
    </div>
  );
}

export default Home;
