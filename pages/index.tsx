import Style from "@/styles/Home.module.scss";
import Head from "next/head";

const Home = (): JSX.Element => {
  return (
    <div className={Style.home}>
      <Head>
        <title>Gaagle</title>
      </Head>
      <main className={Style.home__main}></main>
      <footer className={Style.home__footer}></footer>
    </div>
  );
};

export default Home;
