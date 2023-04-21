import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Navigation } from "@/components/Navigation";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Scavenger Hunt</title>
        <meta name="description" content="Scavenger Hunt" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <Navigation />
      </main>
    </>
  );
}
