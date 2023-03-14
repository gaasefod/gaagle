import Style from "@/styles/Home.module.scss";
import Head from "next/head";

import { Work_Sans } from "next/font/google";

const font = Work_Sans({ subsets: ["latin"] });

import { FiGithub, FiSearch } from "react-icons/fi";

const Home = (): JSX.Element => {
  return (
    <div className={`${Style.home} ${font.className}`}>
      <Head>
        <title>Gaagle</title>
      </Head>
      <main className={Style.home__main}>
        <div className={Style.main__wrapper}>
          <div className={Style.wrapper__logo}></div>
          <div className={Style.wrapper__search}>
            <input className={Style.search__input} type="text" />
            <button className={Style.search__go}>
              <FiSearch />
            </button>
          </div>
        </div>
      </main>
      <footer className={Style.home__footer}>
        <a href="https://github.com/gaasefod" target="_blank">
          <FiGithub />
        </a>
        <span>•</span>
        <a href="https://www.privacytools.io/" target="_blank">
          Privacy
        </a>
      </footer>
    </div>
  );
};

export default Home;
