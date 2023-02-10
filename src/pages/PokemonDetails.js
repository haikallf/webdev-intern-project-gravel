import React from "react";
import { useParams } from "react-router-dom";
import { imgurl } from "../utils/urls";

function PokemonDetails() {
  let { pokemonId: id } = useParams();
  const url = imgurl + `${id}.png`;
  return (
    <div className="pokemonDetails">
      <img src="" alt={`Pokemon Id: ${id}`} />
      <div>{id}</div>
    </div>
  );
}

export default PokemonDetails;
