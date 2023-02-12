import React from "react";
import { imgurl } from "../utils/urls";
import { useNavigate } from "react-router-dom";
import "./PokemonCard.css";

function PokemonCard({ name, id }) {
  const url = imgurl + `${id}.png`;
  const navigate = useNavigate();

  return (
    <div className="pokemonCard" onClick={() => navigate(`pokemon/${id}`)}>
      <img src={url} alt={name} className="pokemonCard__img" />
      <div className="pokemonCard__name">{name}</div>
    </div>
  );
}

export default PokemonCard;
