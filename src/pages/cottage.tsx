import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const Cottage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-32 p-5">
        <h1>Cottage</h1>
        <div className="flex flex-wrap gap-5 py-10">
          <Image
            width={500}
            height={500}
            src={"/images/cottage-1.jpeg"}
            className="object-contain"
            alt=""
          />
          <Image
            width={500}
            height={500}
            src={"/images/cottage-2.jpeg"}
            className="object-contain"
            alt=""
          />
          <Image
            width={500}
            height={500}
            src={"/images/cottage-3.jpeg"}
            className="object-contain"
            alt=""
          />
          <Image
            width={500}
            height={500}
            src={"/images/cottage-4.jpeg"}
            className="object-contain"
            alt=""
          />
          <Image
            width={500}
            height={500}
            src={"/images/cottage-5.jpeg"}
            className="object-contain"
            alt=""
          />
          <Image
            width={500}
            height={500}
            src={"/images/cottage-6.jpeg"}
            className="object-contain"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cottage;
