import Image from "next/image";
import styles from "@/styles/play.module.css";
import { Press_Start_2P } from "next/font/google";
import Link from "next/link";
import { Poap } from "@/components/Poap";

const press = Press_Start_2P({
  variable: "--press-font",
  weight: "400",
  subsets: ["latin"],
});

export default function About() {
  return (
    <div className={press.variable}>
      <Image
        className={styles.play_background}
        src="/pond.jpg"
        alt="Jungle"
        fill
      />
      <h1 className={styles.play_header}>How To Play</h1>
      <p className={styles.play_rules}>
        You’ve just stumbled upon a mysterious scavenger hunt! 🐒 On this
        website, there are three NFTs lurking in the jungle. Each NFT will give
        you a clue to guide you to the next one. Can you brave the dangers and
        find them all? If you do, you’ll get a POAP as a token of your
        adventure! 🗺️ But there’s more! Join the{" "}
        <a
          className={styles.challenger}
          href="https://dev-challenger.solanau.org/events/767b69ce-6dbf-4fa1-ab59-028c5e927102/challenges/3a79a113-af3a-472e-8160-60bbc25a2e3e"
          target="_blank"
        >
          Sol.Ladies Social Club
        </a>{" "}
        challenger for a chance to win cash prizes and merch if you tweet your
        POAP to @buildpr3tti with the hashtags #HackerHouseAustin &
        #SolSocialClub!
      </p>
      <button className={styles.button}>
        <Link href="/">Back</Link>
      </button>
      <Poap />
    </div>
  );
}
