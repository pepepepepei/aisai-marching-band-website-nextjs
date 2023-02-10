import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <SideBar className={styles.sideBar} />
      <main className={styles.main}>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
}
