import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
}
