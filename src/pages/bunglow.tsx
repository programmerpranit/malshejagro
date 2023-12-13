import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const Cottage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-32 p-5">
        <h1>Bunglow</h1>
        <div className="flex flex-wrap justify-center items-center gap-5 py-10">
          <Image
            width={500}
            height={500}
            src={"/images/bunglow/bunglow1.jpg"}
            className="object-contain md:w-1/4 "
            alt=""
          />
          <Image
            width={500}
            height={500}
            src={"/images/bunglow/bunglow2.jpg"}
            className="object-contain md:w-1/4 "
            alt=""
          />
          <Image
            width={500}
            height={500}
            src={"/images/bunglow/bunglow3.jpg"}
            className="object-contain md:w-1/4 "
            alt=""
          />
          <Image
            width={500}
            height={500}
            src={"/images/bunglow/bunglow4.jpg"}
            className="object-contain md:w-1/4 "
            alt=""
          />

          <Image
            width={500}
            height={500}
            src={"/images/bunglow/bunglow7.jpg"}
            className="object-contain md:w-1/4 "
            alt=""
          />
          <Image
            width={500}
            height={500}
            src={"/images/bunglow/bunglow8.jpg"}
            className="object-contain md:w-1/4 "
            alt=""
          />
          <Image
            width={500}
            height={500}
            src={"/images/bunglow/bunglow9.jpg"}
            className="object-contain md:w-1/4 "
            alt=""
          />
          <Image
            width={500}
            height={500}
            src={"/images/bunglow/bunglow10.jpg"}
            className="object-contain md:w-1/4 "
            alt=""
          />
          <Image
            width={500}
            height={500}
            src={"/images/bunglow/bunglow11.jpg"}
            className="object-contain md:w-1/4 "
            alt=""
          />
          <Image
            width={500}
            height={500}
            src={"/images/bunglow/bunglow12.jpg"}
            className="object-contain md:w-1/4 "
            alt=""
          />
          <Image
            width={500}
            height={500}
            src={"/images/bunglow/bunglow5.jpg"}
            className="object-contain md:w-1/4 "
            alt=""
          />
          <Image
            width={500}
            height={500}
            src={"/images/bunglow/bunglow6.jpg"}
            className="object-contain md:w-1/4 "
            alt=""
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cottage;
