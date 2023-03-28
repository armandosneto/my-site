import { NextPage } from "next";
import Head from "next/head";
import style from "./Pokemon.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { Howl } from "howler";
import PokemonInfo from "../../../src/components/PokemonInfo";

const Pokemon: NextPage = () => {
  const router = useRouter();
  const { pokemon } = router.query;

  const audio = useMemo(() => {
    return new Howl({
      src: ["pokemonMusic.mp3"],
      loop: true,
      volume: 0.5,
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      console.log("audio", audio);
      audio.play();
    }, 3000);
    return () => {
      audio.pause();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style.page}>
      <Head>
        <title>Armando Neto Dev</title>
        <meta name="description" content="Desenvolvedor Front-end react" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={style.enemyPokemon}>
        <PokemonInfo pokemon={"Psyduck"} level={1} maxHp={20} />
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
