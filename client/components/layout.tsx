import Head from "next/head";
import { ReactNode } from "react";
import Image from "next/image";

// Import components.
import Nav from "./nav";

// Import styles.
import styles from "../styles/Home.module.css";

// Types.
interface IProps {
  children: ReactNode;
  title: string;
  description: string;
}

const Layout = ({ children, title, description }: IProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main>{children}</main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
};

export default Layout;
