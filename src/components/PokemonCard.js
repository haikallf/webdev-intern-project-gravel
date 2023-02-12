import React from "react";
import { imgurl } from "../utils/urls";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./PokemonCard.css";

function PokemonCard({ name, id }) {
  const url = imgurl + `${id}.png`;
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const removeQueryParams = () => {
    const param = searchParams.get("page");

    if (param) {
      searchParams.delete("page");
      setSearchParams(searchParams);
    }
  };

  const goToDetailPage = () => {
    removeQueryParams();
    navigate(`/pokemon/${id}`);
  };

  return (
    <div className="pokemonCard" onClick={() => goToDetailPage()}>
      <img src={url} alt={name} className="pokemonCard__img" />
      <div className="pokemonCard__name">{name}</div>
    </div>
  );
}

export default PokemonCard;
