import React, { useState } from "react";
import styles from "@/styles/nft.module.css";
import Image from "next/image";
import Link from "next/link";

export function NFTIcon() {
  const [showNFT, setShowNFT] = useState(false);

  return (
    <div>
      <p className={styles.dice} onClick={() => setShowNFT(!showNFT)}> 🎲</p>
      {showNFT && (
        <div className={styles.card}>
          <div className={styles.card_image}>
            <Image
              className={styles.card_image}
              src="/Igor.png"
              alt="NFT created by Glowe"
              width={300}
              height={300}
            />
          </div>
          <div className={styles.card_description}>
            <div className={styles.card_header}>
              <h2>Creator:Glowe</h2>
            </div>
            <div className={styles.card_about}>
              <p>
                Description:Apart from the fact that the spotlight loves him,
                Igor is odd, funny and naturally quirky.
              </p>
            </div>
            <div className={styles.card_clue}>
              <p>
                <br />
                🦁 1/3: I&apos;ll give you this freebie to start, but you&apos;re on your own
                from here. Try hunting around the home page and see what jumps
                out!
              </p>
              <br />
              <Link className={styles.card_link} href="/">Hike Home</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
