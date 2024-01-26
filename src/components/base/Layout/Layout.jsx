import Head from "next/head";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import styles from "./Layout.module.scss";

export default function Layout({ title, isTopPage, children }) {
  return (
    <>
      <Head>
        <title>{title !== undefined ? `${title}｜` : ""}Aisai Marching Band BLOWING</title>
      </Head>
      <SideBar />
      <main className={styles.main}>
        <Header title={title} isTopPage={isTopPage} />
        {children}
        <Footer />
      </main>
    </>
  );
}
