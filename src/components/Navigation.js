import Link from "next/link";
import styles from "@/styles/navigation.module.css";
import { Press_Start_2P } from "next/font/google";

const press = Press_Start_2P({
  variable: "--press-font",
  weight: "400",
  subsets: ["latin"],
});

export function Navigation() {
  return (
    <div className={styles.navigation}>
      <div>
        <ul className={press.variable}>
          <li className={styles.links}>
            <Link href="/play">How To Play</Link>
          </li>
          <button className={styles.button}>
            <Link href="/game">Start The Game</Link>
          </button>
        </ul>
      </div>
    </div>
  );
}
