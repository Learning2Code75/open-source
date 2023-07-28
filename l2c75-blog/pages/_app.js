import "../styles/globals.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaGithub, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://apis.google.com/js/platform.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      // className="mx-auto w-11/12"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <header>
        <div className="header-div">
          <Image
            className="rounded-lg company-logo"
            src="/L2C75_long.png"
            alt="L2C75Logo"
            width={50}
            height={50}
          />
          <h1 className="text-2xl my-8 font-bold text-center">
            Learning2Code75
          </h1>
          <a
            className="instaHolder"
            href="https://github.com/Learning2Code75/"
            target="_blank"
          >
            <FaGithub className="github" />
          </a>
        </div>
        <div className="ytcontainer">
          {/* <script src="https://apis.google.com/js/platform.js"></script> */}

          <div
            class="g-ytsubscribe"
            data-channelid="UCekXweHVy0JQIiVNt_iWTSQ"
            data-layout="full"
            data-count="hidden"
          ></div>
        </div>

        <nav className="my-4">
          <ul className="flex flex-row justify-center space-x-4 navbar ">
            <li className={router.pathname == "/" ? "active" : ""}>
              <Link href="/">
                <a className="text-xl font-extrabold">Home</a>
              </Link>
            </li>
            <li className={router.pathname == "/about" ? "active" : ""}>
              <Link href="/about">
                <a className="text-xl font-extrabold">About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
