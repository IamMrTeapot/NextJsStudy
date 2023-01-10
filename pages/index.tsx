import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
  const handleOnClick = () => {
    console.log("PLacing your order");
    router.push("/product");
  };

  return (
    <div>
      <h1 className={styles.title}>Home Page</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/product">Products</Link>
      <button onClick={handleOnClick}>Place Order</button>
    </div>
  );
}

export default Home;
