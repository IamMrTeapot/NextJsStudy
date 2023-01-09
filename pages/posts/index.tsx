import Link from "next/link";

function PostList({ posts = [{ id: 1, title: "titlesdfsdf" }] }) {
  return (
    <div>
      <h1>List of Posts</h1>

      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`}>
              <h2>
                {post.id} {post.title}
              </h2>
            </Link>

            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default PostList;

export async function getStaticProps() {
  console.log("Generating / Regenerating ProductList");
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();

  return {
    props: {
      posts: data.slice(0, 3),
    },
    revalidate: 10,
  };
}
