import styles from "./Header.module.scss";

export default function Header({ title, isTopPage }) {
  return isTopPage ? (
    <header className={[styles.root, isTopPage ? styles.top : ""].join(" ")}>
      <h1 className={styles.tagline}>
        地域に愛される
        <br />
        マーチングバンドを
        <br className="only-s" />
        目指して
      </h1>
      <span className={styles.scrollArrow}>SCROLL</span>
    </header>
  ) : (
    <header className={styles.root}>
      <h1>{title}</h1>
    </header>
  );
}
