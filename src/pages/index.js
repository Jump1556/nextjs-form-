import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "@/styles/First.module.css";
import Layout from "@/components/Layout";

export default function FirstPage() {
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    postNumber: "",
    parentName: "",
  });

  useEffect(() => {
    if (formData.name === formData.parentName && formData.name !== "") {
      setError(true);
    } else {
      setError(false);
    }
  }, [formData.name, formData.parentName]);

  function handleInput(e) {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  }

  function redirectPage() {
    if (!error) {
      location.href = "/second";
    }
  }

  function storeData() {
    if (typeof window !== "undefined") {
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  }
  //with getItem method we can reach data from second page if needed.

  function submitForm(e) {
    e.preventDefault();
    storeData();
    redirectPage();
  }

  return (
    <>
      <Layout>
        <Head>
          <title>Test for SEB Next App</title>
          <meta name="description" content="Some good content" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <form className={styles.form} onSubmit={submitForm}>
          <div className={styles.formElement}>
            <label className={styles.label}>FÖRNAMN</label>
            <input type="text" name="name" value={formData.name} onChange={handleInput} required />
          </div>

          <div className={styles.formElement}>
            <label className={styles.label}>E-POST</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInput}
              pattern="/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i"
              required
            />
          </div>

          <div className={styles.formElement}>
            <label className={styles.label}>POSTNUMMER</label>
            <input
              type="text"
              name="postNumber"
              value={formData.postNumber}
              onChange={handleInput}
              pattern="\d{5}|\d{3}\s\d{2}"
              required
            />
          </div>

          <div className={styles.line}></div>

          <div className={styles.formElement}>
            <label className={styles.label}>FÖRNAMN PÅ FÖRÄLDER</label>
            <div className={styles.inputWithError}>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleInput}
                required
              />
              {error && (
                <div className={styles.errorText}>
                  Förnamn och förälder nanm kan inte vara samma
                </div>
              )}
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <button className={styles.submitButton} type="submit">
              Skicka
            </button>
          </div>
        </form>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
          quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
          voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
          ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
          sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
          labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
          consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
      </Layout>
    </>
  );
}
