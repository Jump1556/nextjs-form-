import Head from "next/head";
import styles from "@/styles/Second.module.css";
import Layout from "@/components/Layout";

export default function SecondPage() {
  return (
    <>
      <Layout>
        <Head>
          <title>Test for SEB Next App page 2 </title>
          <meta name="description" content="Some good content" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <h1 className={styles.title}>Sida 2</h1>
          <a
            href="/"
            rel="noopener noreferrer" //not needed in that case, but good for vulnerability
          >
            Gå till första sida
          </a>
        </div>
      </Layout>
    </>
  );
}
