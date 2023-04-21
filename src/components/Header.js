import styles from "@/styles/header.module.css";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import localfont from "next/font/local";
import Ladybug from "../../public/Ladybug.png";
import { Press_Start_2P } from "next/font/google";

const press = Press_Start_2P({
  variable: "--press-font",
  weight: "400",
  subsets: ["latin"],
});

const jungle = localfont({
  src: "./junglerock.ttf",
  variable: "--jungle-font",
  weight: "700",
});

export function Header() {
  const [showNFT, setShowNFT] = useState(false);
  return (
    <div className={press.variable}>
      <div className={jungle.variable}>
        <h1 className={styles.header} onClick={() => setShowNFT(!showNFT)}>
          Scavenger <br /> Hunt
        </h1>

        <p className={styles.popup}>
          You&apos;re very close! Something&apos;s hiding near here.
        </p>

        <Image
          className={styles.background}
          src="/home.jpg"
          alt="Jungle"
          fill
        />
        <a
          className={styles.credit}
          href="https://www.freepik.com/author/upklyak"
        >
          Images: Upklyak
        </a>
      </div>
      {showNFT && (
        <div className={styles.card}>
          <div className={styles.card_image}>
            <Image
              className={styles.card_image}
              src={Ladybug}
              alt="NFT Icon"
              width={300}
              height={300}
            />
          </div>
          <div className={styles.card_description}>
            <div className={styles.card_header}>
              <h2>Creator:Ekin</h2>
            </div>
            <div className={styles.card_about}>
              <p>Description:You can&apos;t have a bad day in polka dots.</p>
            </div>
            <div className={styles.card_clue}>
              <p>
                <br />
                🐍 2/3:Something&apos;s lurking near the water... what could it be?
              </p>
              <br />
              <Link className={styles.card_link} href="/play">Go Swim & Find Out!</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
