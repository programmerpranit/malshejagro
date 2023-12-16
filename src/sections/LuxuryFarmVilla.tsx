import Image from "next/image";
import Link from "next/link";
import React from "react";

const LuxuryFarmVilla = () => {
  return (
    <>
      <div className="flex md:flex-row p-5 flex-col-reverse max-w-7xl items-center mx-auto my-10">
        <div className="md:w-2/5 max-md:pt-10">
          <h5>Bunglow</h5>
          <br />
          <h2>Luxury Farm Villa</h2>
          <br />
          <p>
            Each of these Luxury Farm Villas offers peace and quiet environment
            that you can enjoy you from your expansive, humdrum living area.It
            is a heaven in the country offering serenity.
          </p>
          <br />
          <Link href={"/bunglow"}>
            <button>View Details</button>
          </Link>
        </div>
        <div className="md:w-3/5 w-full flex">
          <Image
            src={"/images/bunglow/bunglowfront.jpg"}
            className=" p-1 w-1/2 md:h-[40vh] object-cover h-64"
            width={500}
            height={500}
            alt=""
          />
          <Image
            className="w-1/2 p-1 object-cover  md:h-[40vh] h-64"
            src={"/images/villa/villa5.jpeg"}
            width={500}
            height={500}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default LuxuryFarmVilla;
