import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";

export default function Layout({ children }) {
  return (
    <>
      <SideBar />
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
}
