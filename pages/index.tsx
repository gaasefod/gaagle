import Style from "@/styles/Home.module.scss";
import Head from "next/head";

const Home = (): JSX.Element => {
  return (
    <div className={Style.home}>
      <Head>
        <title>Gaagle</title>
      </Head>
    </div>
  );
};

export default Home;
