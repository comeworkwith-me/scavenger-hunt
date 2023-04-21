import Image from "next/image";
import styles from "@/styles/game.module.css";
import { Press_Start_2P } from "next/font/google";
import { NFTIcon } from "@/components/NFT";

const press = Press_Start_2P({
  variable: "--press-font",
  weight: "400",
  subsets: ["latin"],
});

export default function Contact() {
  return (
    <div className={press.variable}>
      <Image
        className={styles.game_background}
        src="/flowers.jpg"
        alt="Jungle"
        fill
      />
      <h1 className={styles.game_header}>Play The Game</h1>
      <p className={styles.game_start}>
        Are you ready?! <br />Roll the dice and let the game begin!
      </p>
      <NFTIcon />
    </div>
  );
}
