import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <Head>
        <title>Learning2Code75</title>
        <link rel="icon" href="/L2C75.png" />
      </Head>

      <main className="flex flex-col  justify-center space-y-4 text-center">
        <h1 className="text-3xl my-8 font-bold text-center">About Us</h1>
        <p> Open source contribution learnings.</p>
        <div className="logo-img">
          <Image
            className="rounded-lg "
            src="/L2C75.png"
            alt="L2C75Logo"
            width={500}
            height={500}
          />
        </div>
      </main>
    </div>
  );
}
