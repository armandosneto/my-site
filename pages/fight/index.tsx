import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import DialogBallon from "../../src/components/DialogBallon";
import style from "./fight.module.scss";

const Fight: NextPage = () => {
  const [showDialog, setShowDialog] = useState(true);
  const [confirm, setConfirm] = useState({
    show: false,
    pokemon: "",
  });
  const router = useRouter();

  const handleHover = (id: string) => {
    // change the classname of the <i> element to show the hover effect
    const element = document.getElementById(id);
    if (element) {
      element.className = `nes-${id}`;
    }
  };
  const handleLeave = (id: string) => {
    // change the classname of the <i> element to show the hover effect
    const element = document.getElementById(id);
    if (element) {
      element.className = "nes-pokeball";
    }
  };

  return (
    <div className={style.page}>
      <Head>
        <title>Armando Neto Dev</title>
        <meta name="description" content="Desenvolvedor Front-end react" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={style.filter}>
        <aside>
          <a
            href="https://github.com/armandosneto"
            target="_blank"
            rel="noreferrer"
          >
            <i className="nes-icon github is-large"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/armandosneto/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="nes-icon linkedin is-large"></i>
          </a>
          <a
            href="mailto:armandosneto@outlook.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="nes-icon gmail is-large"></i>
          </a>
        </aside>
        <main>
          <DialogBallon
            type="h2"
            words={["Um pokémon selvagem apareceu!", "Selecione um pokémon:"]}
            onClick={() => setShowDialog(false)}
            visible={showDialog}
          />
          {!showDialog && (
            <div className={style.pokemonsWrapper}>
              <p style={{ color: "#fff" }}>Escolha um pokémon:</p>
              <div className={style.pokemons}>
                <i
                  className="nes-pokeball"
                  id="charmander"
                  onMouseOver={() => handleHover("charmander")}
                  onMouseLeave={() => {
                    if (!confirm.show) handleLeave("charmander");
                  }}
                  onClick={() => {
                    handleHover("charmander");
                    setConfirm({ show: true, pokemon: "charmander" });
                  }}
                ></i>
                <i
                  className="nes-pokeball"
                  id="squirtle"
                  onMouseOver={() => handleHover("squirtle")}
                  onMouseLeave={() => {
                    if (!confirm.show) handleLeave("squirtle");
                  }}
                  onClick={() => {
                    handleHover("squirtle");
                    setConfirm({ show: true, pokemon: "squirtle" });
                  }}
                ></i>
                <i
                  className="nes-pokeball"
                  id="bulbasaur"
                  onMouseOver={() => handleHover("bulbasaur")}
                  onMouseLeave={() => {
                    if (!confirm.show) handleLeave("bulbasaur");
                  }}
                  onClick={() => {
                    handleHover("bulbasaur");
                    setConfirm({ show: true, pokemon: "bulbasaur" });
                  }}
                ></i>
              </div>
            </div>
          )}
        </main>
        <dialog className="nes-dialog is-rounded" open={confirm.show}>
          <p>Você escolheu {confirm.pokemon}! Tem certeza?</p>
          <label onClick={() => router.push(`/fight/${confirm.pokemon}`)}>
            <input type="radio" className="nes-radio" name="answer" checked />
            <span>Sim</span>
          </label>
          <label
            onClick={() => setConfirm({ show: false, pokemon: "" })}
            onKeyDown={(e) => {
              // check if the label is focused and the user pressed the enter key
              if (e.key === "Enter") {
                setConfirm({ show: false, pokemon: "" });
              }
            }}
          >
            <input type="radio" className="nes-radio" name="answer" />
            <span>Não</span>
          </label>
        </dialog>
        <footer style={{ color: "#fff" }}>
          Armando Neto Dev CNPJ: 42.916.855/0001-07
        </footer>
      </div>
    </div>
  );
};

export default Fight;
