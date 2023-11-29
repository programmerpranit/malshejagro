import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const ACVilla = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-32 p-5">
        <h1>AC Villa</h1>
        <div className="flex flex-wrap gap-5 py-10">
          <Image
            width={500}
            height={500}
            src={"/images/villa-1.jpeg"}
            className="object-contain"
            alt=""
          />
          <Image
            width={500}
            height={500}
            src={"/images/villa-3.jpeg"}
            className="object-contain"
            alt=""
          />
          <Image
            width={500}
            height={500}
            src={"/images/villa-4.jpeg"}
            className="object-contain"
            alt=""
          />
          <Image
            width={500}
            height={500}
            src={"/images/villa-2.jpeg"}
            className="object-contain"
            alt=""
          />
          <Image
            width={500}
            height={500}
            src={"/images/villa-5.jpeg"}
            className="object-contain"
            alt=""
          />
          <Image
            width={500}
            height={500}
            src={"/images/villa-6.jpeg"}
            className="object-contain"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ACVilla;
