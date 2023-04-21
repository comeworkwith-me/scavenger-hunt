import Image from "next/image";
import { Connection, PublicKey } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { useProgram, useClaimNFT } from "@thirdweb-dev/react/solana";
import {
  WalletMultiButton,
  WalletDisconnectButton,
} from "@solana/wallet-adapter-react-ui";
import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/poap.module.css";

export function Poap() {
  const [showPoap, setShowPoap] = useState(false);

  const wallet = useWallet();
  const programAddress = "KRT6aRUQvZo3mewCFjAvrdqDXH5iFLd4N1B3we6cE2c";
  const { program } = useProgram(programAddress, "nft-drop");
  const { mutateAsync: claim, isLoading, error } = useClaimNFT(program);

  return (
    <div>
      <p className={styles.emoji} onClick={() => setShowPoap(!showPoap)}>
        🐊
      </p>
      {showPoap && (
        <div className={styles.card}>
          <div className={styles.card_image}>
            <Image
              className={styles.card_image}
              src="/matasatu.jpg"
              alt="NFT created by Matasatu"
              width={300}
              height={300}
            />
          </div>
          <div className={styles.card_description}>
            <div className={styles.card_header}>
              <h2>Creator:Matasatu</h2>
            </div>
            <div className={styles.card_about}>
              <p>
                Description:After taking a bath in the morning and walking
                through a flower field, Matabolong feels fabulous.
              </p>
            </div>
            <div className={styles.card_clue}>
              <p>
                <br />
                🦓 3/3: YOU DID IT, YOU survived THE hunt! GRAB ONE OF THE 10
                RARE POAPs. Make sure you SWITCH TO DEVNET BEFORE YOU SEAL THE
                DEAL!!
              </p>
              <br />
              {wallet.publicKey ? (
                <button
                  disabled={isLoading}
                  onClick={() => claim({ amount: 1 })}
                >
                  {isLoading ? "Claiming..." : "Claim NFT"}
                </button>
              ) : (
                <WalletMultiButton className={styles.button} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
