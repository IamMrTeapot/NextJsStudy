import { useRouter } from "next/router";

type withId = {
  id: string;
  title: string;
  price: number;
};

function Product({ product = { id: 1, title: "hiasadasd", price: 100 } }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading . . .</h1>;
  }

  return (
    <div>
      <h2>
        {product.id} {product.title} {product.price}
      </h2>
    </div>
  );
}

export default Product;

export async function getStaticPaths() {
  const response = await fetch(`http://localhost:4000/products/`);
  const data: withId[] = await response.json();

  const paths = data.map((product) => {
    return {
      params: {
        productId: `${product.id}`,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context = { params: { productId: 1 } }) {
  const { params } = context;
  console.log(`Regenerating product ${params.productId}`);

  const response = await fetch(
    `http://localhost:4000/products/${params.productId}`
  );
  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  console.log(`Generating page for /products/${params.productId}`);

  return {
    props: {
      product: data,
    },
    revalidate: 10,
  };
}
