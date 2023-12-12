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
            src={"/images/cottage/cottages1.jpg"}
            className="object-contain"
            alt=""
          />
          <Image
            width={500}
            height={500}
            src={"/images/cottage/cottages2.jpg"}
            className="object-contain"
            alt=""
          />
          <Image
            width={500}
            height={500}
            src={"/images/cottage/cottages3.jpg"}
            className="object-contain"
            alt=""
          />

          <Image
            width={500}
            height={500}
            src={"/images/cottage/cottages4.jpg"}
            className="object-contain"
            alt=""
          />

          <Image
            width={500}
            height={500}
            src={"/images/cottage/cottage5.jpg"}
            className="object-contain"
            alt=""
          />

          <Image
            width={500}
            height={500}
            src={"/images/cottage/cottage6.jpg"}
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
