import Head from "next/head";
import Footer from "../components/layout/Footer";
import styles from "../styles/About.module.scss";

function About() {
  return (
    <div>
      <Head>
        <title>About Nextjs</title>
        <meta name="description" content="I can change this" />
      </Head>
      <h2 className={styles.highlightscss}>About Page</h2>
      <button className="btn btn-primary">Primary</button>
    </div>
  );
}

export default About;

// About.getLayout = function PageLayout(page) {
//   return (
//     <>
//       {page}
//       <Footer />
//     </>
//   );
// };
