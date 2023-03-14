import Style from "@/styles/Home.module.scss";
import Head from "next/head";

import { Work_Sans } from "next/font/google";

const font = Work_Sans({ subsets: ["latin"] });

const Home = (): JSX.Element => {
  return (
    <div className={`${Style.home} ${font.className}`}>
      <Head>
        <title>Gaagle</title>
      </Head>
      <main className={Style.home__main}></main>
      <footer className={Style.home__footer}></footer>
    </div>
  );
};

export default Home;
