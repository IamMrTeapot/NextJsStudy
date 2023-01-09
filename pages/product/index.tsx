import Link from "next/link";

function index({ productId = 100 }) {
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>product homepage</h1>
      <Link href="/product/1">Product 1</Link>
      <Link href="/product/2">Product 2</Link>
      <Link href="/product/3" replace>
        Product 3
      </Link>
      <Link href={`/product/${productId}`}>Product {productId}</Link>
    </div>
  );
}

export default index;
