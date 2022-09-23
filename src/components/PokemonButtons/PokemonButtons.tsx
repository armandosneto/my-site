import React, { useState } from "react";
import MarioModal from "../MarioModal/MarioModal";
import style from "./PokemonButtons.module.scss";
import Image from "next/image";
import photo from "../../../public/me.jpeg";

interface Props {}
const PokemonButtons: React.FC<Props> = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [buttonClicked, setButtonClicked] = useState<string | undefined>();

  return (
    <>
      <div className={style.pokemons}>
        <div className={style.pokemon}>
          <i className="nes-bulbasaur"></i>
          <button
            onClick={() => {
              setShowModal(true);
              setButtonClicked("mim");
            }}
            type="button"
            className="nes-btn is-success"
          >
            Sobre mim
          </button>
        </div>
        <div className={style.pokemon}>
          <i className="nes-charmander"></i>
          <button
            onClick={() => {
              setShowModal(true);
              setButtonClicked("exp");
            }}
            type="button"
            className="nes-btn is-error"
          >
            Minhas EXP
          </button>
        </div>
        <div className={style.pokemon}>
          <i className="nes-squirtle"></i>
          <button
            onClick={() => {
              setShowModal(true);
              setButtonClicked("fale");
            }}
            type="button"
            className="nes-btn is-primary"
          >
            Fale CMG!
          </button>
        </div>
      </div>
      <MarioModal
        showModal={showModal}
        onClose={() => {
          setShowModal(false);
          setButtonClicked(undefined);
        }}
      >
        {buttonClicked === "mim" ? (
          <>
            <p>
              Pra começar, deixa eu me apresentar, esse na foto abaixo sou eu,
              Armando Neto
            </p>
            <Image alt="Armando" src={photo} width={200} height={200} />
            <p>
              Como sempre quando me apresento, a primeira caracteristica que
              todos tem que saber é que sou baiano! Acabei parando em terras
              goianas pra realizar o sonho de fazer um curso na área de
              computação, e cá estou, aos 24, quase formando e por irônia do
              destino(e pra minha felicidade) acabei parando no mundo do
              front-end e me apaixonando!
            </p>
          </>
        ) : buttonClicked === "exp" ? (
          <></>
        ) : (
          <></>
        )}
      </MarioModal>
    </>
  );
};

export default PokemonButtons;
