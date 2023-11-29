import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const FamilyRoom = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-32 p-5">
        <h1>Family Room</h1>
        <div className="flex flex-wrap gap-5 py-10">
          <Image
            width={500}
            height={500}
            src={"/images/family-room-1.jpeg"}
            className=""
            alt=""
          />
          <Image
            width={500}
            height={500}
            src={"/images/family-room-2.jpeg"}
            className=""
            alt=""
          />
          <Image
            width={500}
            height={500}
            src={"/images/family-room-3.jpeg"}
            className=""
            alt=""
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FamilyRoom;
