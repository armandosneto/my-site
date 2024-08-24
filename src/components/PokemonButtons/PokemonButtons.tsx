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
              computação, e cá estou, aos 26, formado em engenharia de
              computação e por irônia do destino(e pra minha felicidade) acabei
              parando no mundo do front-end e me apaixonando!
            </p>
          </>
        ) : buttonClicked === "exp" ? (
          <>
            <p>
              OmniSaúde - Estagiário
              <br />
              Goiânia, Goiás, Brasil | Maio 2021 - Agosto 2021
              <br />
              <ul>
                <li>
                  Proposta e auxílio na adoção do NextJS como ferramenta de
                  desenvolvimento front-end, resultando em maior eficiência e
                  performance.
                </li>
                <li>
                  Colaboração com a equipe de desenvolvimento para implementar
                  soluções de monitoramento de leitos de UTI e teleatendimento.
                </li>
              </ul>
            </p>
            <p>
              OmniSaúde - Desenvolvedor Front End
              <br />
              Goiânia, Goiás, Brasil | Agosto 2021 - Atualmente
              <br />
              <ul>
                <li>
                  Tecnologias: ReactJs, NextJs, Ant Design, Sass, Less,
                  Tailwind, ExpressJs, Docker, Jest, React Testing Library
                </li>
                <li>
                  Levantamento de requisitos, tomadas de decisão arquitetural e
                  construção de microsserviços.
                </li>
                <li>
                  Liderança do time front-end de sustentação, focado em
                  manutenção de produtos e aplicações internas.
                </li>
                <li>
                  Implementação de soluções responsivas, componentização e
                  reaproveitamento de código, resultando em melhorias
                  significativas na eficiência e usabilidade dos sistemas.
                </li>
              </ul>
            </p>
          </>
        ) : (
          <></>
        )}
      </MarioModal>
    </>
  );
};

export default PokemonButtons;
