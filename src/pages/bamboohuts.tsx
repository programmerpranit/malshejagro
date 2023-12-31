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
        <div className="flex flex-wrap justify-center gap-5 py-10">
          <Image
            width={500}
            height={500}
            src={"/images/bamboohuts/bamboo1.jpg"}
            className="object-contain"
            alt=""
          />
          <Image
            width={500}
            height={500}
            src={"/images/bamboohuts/bamboo2.jpg"}
            className="object-contain"
            alt=""
          />
          <Image
            width={500}
            height={500}
            src={"/images/bamboohuts/chairs.jpg"}
            className="object-contain"
            alt=""
          />
          <Image
            width={500}
            height={500}
            src={"/images/bamboohuts/bamboo3.jpg"}
            className="object-contain"
            alt=""
          />
          <Image
            width={500}
            height={500}
            src={"/images/bamboohuts/bamboo4.jpg"}
            className="object-contain"
            alt=""
          />
          <Image
            width={500}
            height={500}
            src={"/images/bamboohuts/bamboo5.jpg"}
            className="object-contain"
            alt=""
          />
          {/* <Image
            width={500}
            height={500}
            src={"/images/bamboohuts/bamboo6.jpg"}
            className="object-contain"
            alt=""
          /> */}
          <Image
            width={500}
            height={500}
            src={"/images/bamboohuts/bamboo7.jpg"}
            className="object-contain"
            alt=""
          />
          <Image
            width={500}
            height={500}
            src={"/images/bamboohuts/bamboo8.jpg"}
            className="object-contain"
            alt=""
          />
          {/* <Image
            width={500}
            height={500}
            src={"/images/bamboohuts/bamboo9.jpg"}
            className="object-contain"
            alt=""
          /> */}
          {/* <Image
            width={500}
            height={500}
            src={"/images/bamboohuts/bamboo10.jpg"}
            className="object-contain"
            alt=""
          /> */}
          {/* <Image
            width={500}
            height={500}
            src={"/images/bamboohuts/bamboo11.jpg"}
            className="object-contain"
            alt=""
          /> */}
          {/* <Image
            width={500}
            height={500}
            src={"/images/bamboohuts/bamboo12.jpg"}
            className="object-contain"
            alt=""
          /> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BambooHuts;
