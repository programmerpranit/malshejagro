import Image from "next/image";
import React from "react";

const LuxuryFarmVilla = () => {
  return (
    <>
      <div className="flex md:flex-row p-5 flex-col-reverse max-w-7xl items-center mx-auto my-10">
        <div className="md:w-2/5 max-md:pt-10">
          <h5>LUXURY Aminities</h5>
          <br />
          <h2>Luxury Farm Villa</h2>
          <br />
          <p>
            Each of these Luxury Farm Villas offers peace and quiet environment
            that you can enjoy you from your expansive, humdrum living area.It
            is a heaven in the country offering serenity.
          </p>
        </div>
        <div className="md:w-3/5 w-full flex">
          <Image
            src={"/images/villa/villa1.jpeg"}
            className="place-self-end w-3/5 md:-mr-32 -mr-20 md:mt-32 mt-20 z-10 object-contain"
            width={500}
            height={500}
            alt=""
          />
          <Image
            className="self-start w-3/5  object-contain"
            src={"/images/villa/villa2.jpeg"}
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
