import styles from "./Header.module.css";

export default function Header({ title }) {
  return (
    <header className={styles.root}>
      <h1>{title}</h1>
    </header>
  );
}
