import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { imgurl, prefix } from "../utils/urls";
import "./PokemonDetails.css";
import { capitalizeFirstLetter } from "../utils/functions";

function PokemonDetails() {
  let { pokemonId: id } = useParams();
  const url = imgurl + `${id}.png`;

  const [name, setName] = useState("");
  const [type, setType] = useState([]);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [abilities, setAbilities] = useState([]);
  const [moves, setMoves] = useState([]);
  const [stats, setStats] = useState([]);

  const [showMore, setShowMore] = useState(false);

  const getPokemonDetails = async () => {
    const response = await axios.get(prefix + `/pokemon/${id}`);
    setName(response.data.name);
    setType(response.data.types);
    setWeight(response.data.weight);
    setHeight(response.data.height);
    setAbilities(response.data.abilities);
    setMoves(response.data.moves);
    setStats(response.data.stats);
  };

  useEffect(() => {
    getPokemonDetails();
  }, []);

  return (
    <>
      <h1 className="pokemonDetails__name">{capitalizeFirstLetter(name)}</h1>
      <div className="pokemonDetails__container">
        <div className="pokemonDetails">
          <img
            src={url}
            alt={`Pokemon Id: ${id}`}
            className="pokemonDetails__img"
          />
          <div className="pokemonDetails__data">
            <div className="pokemonDetails__dataLeft">
              <div className="pokemonDetails__title">Type:</div>
              <ul>
                {type.map((elmt, idx) => (
                  <li key={idx}>{elmt.type.name}</li>
                ))}
              </ul>
              <div className="pokemonDetails__title">Weight: {weight}</div>
              <div className="pokemonDetails__title">Height: {height}</div>
              <div className="pokemonDetails__title">Abilities:</div>
              <ul>
                {abilities.map((elmt, idx) => (
                  <li key={idx}>{elmt.ability.name}</li>
                ))}
              </ul>
              <div className="pokemonDetails__title">Stats:</div>
              <ul>
                {stats.map((elmt, idx) => (
                  <li key={idx}>
                    {elmt.stat.name}: {elmt.base_stat}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pokemonDetails__dataRight">
              <div className="pokemonDetails__title">Moves:</div>
              <ul>
                {moves
                  .slice(0, showMore ? moves.length : 5)
                  .map((elmt, idx) => (
                    <li key={idx}>{elmt.move.name}</li>
                  ))}
              </ul>
              <div
                className="pokemonDetails__showMore"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Show less" : "Show more"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PokemonDetails;
