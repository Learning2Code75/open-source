import Head from "next/head";
import { getAllPosts } from "../../lib/data";
import { format, parseISO, add } from "date-fns";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";

export default function BlogPage({ title, date, content }) {
  const hydratedContent = hydrate(content);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "0 3vw",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/L2C75.png" />
      </Head>
      <main
        // className="flex flex-col text-center justify-center "
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="bg-gradient-to-r from-blue-300 via-transparent to-gray-200 p-3 rounded-lg ">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-md font-medium">
            {format(parseISO(date), "MMMM do, uuuu")}
          </p>
        </div>
        <div className="text-lg border-blue-500 border rounded-lg p-4 my-4  flex flex-col break-normal ">
          <div className="prose">{hydratedContent}</div>
        </div>
      </main>
    </div>
  );
}
export async function getStaticProps(context) {
  const { params } = context;
  const allPosts = getAllPosts();
  const { data, content } = allPosts.find((item) => item.slug === params.slug);
  const mdxSource = await renderToString(content);

  // console.log(content)
  // console.log(data)
  return {
    props: {
      ...data,
      data: data.date,
      content: mdxSource,
    },
  };
}
export async function getStaticPaths() {
  const allPosts = getAllPosts();
  // console.log(allPosts);
  return {
    paths: allPosts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}
