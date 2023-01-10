import Footer from "../components/Footer";
import styles from "../styles/About.module.scss";

function About() {
  return (
    <div>
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
