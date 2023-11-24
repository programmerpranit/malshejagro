import Chatbot from "@/components/Chatbot";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="fixed top-96 right-1">
        <div className="bg-heading p-3 my-1">
          <div className="border p-2"></div>
        </div>
        <div className="bg-heading p-3 my-1">
          <div className="border p-2"></div>
        </div>
        <div className="bg-heading p-3 my-1">
          <div className="border p-2"></div>
        </div>
      </div>
      <Component {...pageProps} />

      <Chatbot/>
    </>
  );
}
