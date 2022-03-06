import { NextPage } from "next";

// Import components.
import Layout from "@components/layout";

// Import styles.
import styles from "../styles/Home.module.css";

const Users: NextPage = () => {
  return (
    <Layout title="About" description="Page about">
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>About</h1>
        </main>
      </div>
    </Layout>
  );
};

export default Users;
