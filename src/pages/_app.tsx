import Chatbot from "@/components/Chatbot";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MdCall, MdOutlineWhatsapp } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
          <Head>
        <title>Malshej Agro Tourism and Farm</title>
        <meta
          name="description"
          content="Malshej Agro Tourism and Farm"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="fixed top-96 right-1">
        <div className="bg-heading p-2 my-1">
          <a href="tel:917666999143">

            <MdCall color={"#fff"} />
          </a>
        </div>
        <div className="bg-heading p-2 my-1">
          <a href="https://wa.me/917666999551">

            <MdOutlineWhatsapp  color={"#fff"} />
          </a>
        </div>
        <div className="bg-heading p-2 my-1">
          <a href="https://www.instagram.com/malshej.agro.tourism/">

            <IoLogoInstagram color={"#fff"} />
          </a>
        </div>
        
      </div>

      <Component {...pageProps} />

      <Chatbot/>
    </>
  );
}
