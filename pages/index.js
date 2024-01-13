import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import Logo from "./images/logo-preview.jpg";
export default function Home() {
  const { data: session } = useSession();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://heartfelt-bublanina-390a41.netlify.app/"
        />
        <meta property="og:title" content="Cogencis iinvest" />
        <meta
          property="og:description"
          content="An all-in-one portal for informed investment decision"
        />
        <meta property="og:image" content="/images/logo-preview.jpg" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Image intrinsic src={Logo} />
      {!session ? (
        <>
          <p>Not signed in</p>
          <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      ) : (
        <main className={styles.main}>
          <div className={styles.header}>
            <h4>Signed in as {session.user.name}</h4>
            <button onClick={() => signOut()}>Sign out</button>
          </div>
          <h1 className={styles.title}>My Blog</h1>
          <div className={styles.row}>
            <div className={styles.blogCard}>
              <Image
                src="/Getting-Started-with-NextJS-Inside.jpeg"
                alt="blog1"
                width={300}
                height={200}
              />
              <div className={styles.blogCardContent}>
                <h2>Nexjs for Beginers</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quidem.
                </p>

                <a href="/blog1">Read More</a>
              </div>
            </div>
            <div className={styles.blogCard}>
              <Image
                src="/pasted image 0.png"
                alt="blog1"
                width={300}
                height={200}
              />
              <div className={styles.blogCardContent}>
                <h2>Django Full Course</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quidem.
                </p>

                <a href="/blog1">Read More</a>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
