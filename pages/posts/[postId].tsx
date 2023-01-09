type withId = {
  id: string;
};

function Post() {}

export default Post;

export async function getStaticPaths() {
  const response = await fetch(`https://jsonplaecholder.typicode.com/posts`);
  const data: withId[] = await response.json();

  const paths = data.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });
}

export async function getStaticProps(context = { params: { postId: 1 } }) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaecholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
}
