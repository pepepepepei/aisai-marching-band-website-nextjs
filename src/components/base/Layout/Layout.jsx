import Head from "next/head";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import styles from "./Layout.module.css";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title !== undefined ? `${title}｜` : ""}Aisai Marching Band BLOWING</title>
      </Head>
      <SideBar className={styles.sideBar} />
      <main className={styles.main}>
        <Header title={title} />
        {children}
        <Footer />
      </main>
    </>
  );
}
