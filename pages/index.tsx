import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_left}>
        <h1>Knock</h1>
        <p>施設を探す</p>
      </div>
      <nav className={styles.nav_items}>
        <li>お気に入り</li>
        <li>メッセージ</li>
        <li>運営からのお知らせ</li>
        <li>マイページ</li>
      </nav>
    </header>
  );
};

export default Home;
