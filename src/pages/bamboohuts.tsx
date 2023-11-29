import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const BambooHuts = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-32 p-5">
        <h1>Bamboo Huts</h1>
        <div className="flex flex-wrap gap-5 py-10">
          <Image
            width={500}
            height={500}
            src={"/images/bamboo-1.jpeg"}
            className="object-contain"
            alt=""
          />
          <Image
            width={500}
            height={500}
            src={"/images/bamboo-3.jpeg"}
            className="object-contain"
            alt=""
          />
          <Image
            width={500}
            height={500}
            src={"/images/bamboo-4.jpeg"}
            className="object-contain"
            alt=""
          />
          <Image
            width={500}
            height={500}
            src={"/images/bamboo-5.jpeg"}
            className="object-contain"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BambooHuts;
