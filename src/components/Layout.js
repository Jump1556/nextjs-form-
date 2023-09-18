import styles from "@/styles/Layout.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

//I would put header and footer in the separate components if they have more content and logic.

export default function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <i>Probably some logo and navigation will be here</i>
      </header>
      <main className={`${styles.main} ${inter.className}`}>{children}</main>
      <footer>
        <p>Made by Anastasiia V.</p>
        <p>Slava Ukraini!</p>
      </footer>
    </>
  );
}
