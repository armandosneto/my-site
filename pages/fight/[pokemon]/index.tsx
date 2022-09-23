import { NextPage } from "next";
import Head from "next/head";
import style from "./Pokemon.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Pokemon: NextPage = () => {
  const router = useRouter();
  const { pokemon } = router.query;

  useEffect(() => {
    //when page loads, play /pokemonMusic.mp3
    const audio = new Audio("/pokemonMusic.mp3");
    audio.play();
    // reduce volume
    audio.volume = 0.2;
    return () => {
      //when page unmounts, stop playing
      audio.pause();
    };
  }, []);

  return (
    <div className={style.page}>
      <Head>
        <title>Armando Neto Dev</title>
        <meta name="description" content="Desenvolvedor Front-end react" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={style.enemyPokemon}>
        <Image src={`/psyduck.png`} width={300} height={300} alt="pokemon" />
      </div>
      {pokemon && (
        <div className={style.myPokemon}>
          <Image
            src={`/${pokemon}.png`}
            width={500}
            height={500}
            alt="pokemon"
          />
        </div>
      )}
    </div>
  );
};

export default Pokemon;
