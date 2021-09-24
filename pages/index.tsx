import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import CustomTitle from "../src/components/CustomTitle/CustomTitle";
import PokemonButtons from "../src/components/PokemonButtons/PokemonButtons";
import style from "../styles/LandingPage.module.scss";

const Home: NextPage = () => {
  return (
    <div className={style.page}>
      <Head>
        <title>Armando Neto Dev</title>
        <meta name="description" content="Desenvolvedor Front-end react" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={style.filter}>
        <header>
          <div>
            <i className="nes-icon is-medium heart"></i>
            <i className="nes-icon is-medium is-half heart"></i>
            <i className="nes-icon is-medium is-transparent heart"></i>
          </div>
        </header>
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
          <h3>Hello World!</h3>
          <CustomTitle>Armando Neto</CustomTitle>
          <h2>Front-end Developer</h2>
          <div className={style.choose}>
            <p>Choose your Pokemon:</p>
            <PokemonButtons />
          </div>
        </main>
        <footer>Armando Neto Dev CNPJ: 42.916.855/0001-07</footer>
      </div>
    </div>
  );
};

export default Home;
