// type articleType = {
//   id: string;
//   title: string;
//   description: string;
// };

// type articleResponseType = {
//   articles: articleType[];
// };

// import { ServerResponse } from "http";
// import { GetServerSideProps } from "next";

function ArticleListByCategory({
  articles = [{ id: 1, title: "asd", description: "asdas" }],
  category = "cat",
}) {
  return (
    <div>
      <h1>
        Showing news for category <i>{category}</i>
      </h1>
      {articles.map((article) => {
        return (
          <div>
            <h2>
              {article.id} {article.title}
            </h2>
            <p>{article.description}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default ArticleListByCategory;

export const getServerSideProps = async (
  context = { params: { category: "cat" } }
) => {
  const { params } = context;
  //console.log(reg.headers.cookie);
  //res.setHeader("Set-Cookie", ["name=Vishwas"]);
  const { category } = params;
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );

  const data = await response.json();
  //console.log(data);
  console.log(`Pre-rendering News Articles for category ${category}`);

  return {
    props: {
      articles: data,
      category,
    },
  };
};
