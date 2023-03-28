import React from "react";
import "./PokemonInfo.module.scss";
import style from "./PokemonInfo.module.scss";

interface Props {
  pokemon: string;
  level: number;
  maxHp: number;
}
const PokemonInfo: React.FC<Props> = ({ pokemon, level, maxHp }) => {
  return (
    <div className={style.infoWrapper}>
      <div className={`${style.pokemonInfo}`}>
        <p className="title">{pokemon}</p>
      </div>
      <div
        style={{
          width: "0px",
          height: "0px",
          borderBottom: "100px solid #fff",
          borderRight: "100px solid transparent",
          boxShadow: "",
        }}
      ></div>
    </div>
  );
};

export default PokemonInfo;
