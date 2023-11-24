import Image from "next/image";
import React from "react";

const Restaurent = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col max-w-7xl items-center mx-auto my-10">
        <div className="md:w-1/2 p-5">
          <div className="">
            <h5>Restaurent</h5>
            <br />
            <h2>Let the good times roll and leave all the planning to us.</h2>
            <br />
          </div>
          <Image src={"/images/party.jpeg"} width={700} height={700} alt="" />
        </div>
        <div className="md:w-1/2 p-5 flex h-full flex-col justify-between">
          <Image
            src={"/images/restaurent.jpeg"}
            width={700}
            height={700}
            alt=""
          />
          <br />
          <br />

          <p>
            The ultimate bachelor party experience awaits in Lush Green Nature
            of Malshej.So, gather your bros and get primed for a world-class
            bachelor party for the ages in this spectacular destination.
          </p>
          <br />
        </div>
      </div>
    </>
  );
};

export default Restaurent;
