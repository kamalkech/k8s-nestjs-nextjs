import { NextPage } from "next";

// Import components.
import Layout from "@components/layout";

// Import services.
import { fetchUsers } from "@services/users";

// Import styles.
import styles from "../styles/Home.module.css";

const Users: NextPage = (props: any) => {
  return (
    <Layout title="Users" description="List users">
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Users</h1>
          <ul>
            {props.users &&
              props.users.map((el: any) => <ol key={el.id}>{el.name}</ol>)}
          </ul>
        </main>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context: any) {
  const users = await fetchUsers();
  return {
    props: { users },
  };
}

export default Users;
