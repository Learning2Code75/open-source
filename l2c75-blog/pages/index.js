import Head from "next/head";
import Link from "next/link";
import { format, parseISO, add } from "date-fns";
import Image from "next/image";

import { getAllPosts } from "../lib/data";
export default function Home({ posts }) {
  return (
    <div
      style={{
        // background: "pink",
        display: "flex",
        flexDirection: "column",
        padding: "0 2vw",
      }}
    >
      <Head>
        <title>Learning2Code75 Blog</title>
        <link rel="icon" href="/L2C75.png" />
      </Head>

      <main className="flex flex-col text-center  justify-center space-y-4">
        {posts.map((item) => (
          <BlogListItem key={item.slug} {...item} />
        ))}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts.map(({ data, content, slug }) => ({
        ...data,
        data: data.date,
        content,
        slug,
      })),
    },
  };
}

function BlogListItem({ slug, title, date, content }) {
  return (
    <div className="flex flex-col text-center justify-center border border-blue-500 rounded-lg p-4 hover:shadow-xl shadow-md hover:border-black transition-200 ease-in-out">
      <div>
        <h1>
          <Link href={`/blog/${slug}`}>
            <a className="font-bold text-2xl p-0">{title}</a>
          </Link>
        </h1>
      </div>
      <div className="p-2">
        <h1>
          <Link href={`/blog/${slug}`}>
            <a className="btn font-bold text-2xl p-0">View Blogpage</a>
          </Link>
        </h1>
      </div>

      <div className="text-gray-600 text-sm">
        <p>{format(parseISO(date), "MMMM do, uuuu")}</p>
      </div>
      <div>
        <Image
          className="rounded thumbnail"
          src={`/photos/Thumbnails/${slug}.jpg`}
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
      <div className="prose flex flex-col  justify-center space-y-4 text-center">
        {content.substr(0, 112)}
      </div>
    </div>
  );
}
