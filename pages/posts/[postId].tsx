import { useRouter } from "next/router";

type withId = {
  id: string;
  title: string;
};

function Post({ post = { id: 1, title: "hiasadasd" } }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading . . .</h1>;
  }

  return (
    <div>
      <h2>
        {post.id} {post.title}
      </h2>
    </div>
  );
}

export default Post;

export async function getStaticPaths() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data: withId[] = await response.json();

  const paths = data.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context = { params: { postId: 1 } }) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  console.log(`Generating page for /posts/${params.postId}`);

  return {
    props: {
      post: data,
    },
  };
}
