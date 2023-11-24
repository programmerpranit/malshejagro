import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#1f242e] ">
        <div className="max-w-7xl mx-auto p-10 flex max-md:flex-col items-center">
          <div className="md:w-1/3 p-5 flex flex-col items-center">
            <Image width={200} height={200} src={"/logo.png"} alt="" />
            <br />
            <h3 className="text-white text-center">
              Malshej Agro Tourism And Farm
            </h3>
          </div>
          <div className="md:w-1/3 p-5 flex flex-col items-center"></div>
          <div className="md:w-1/3 p-5 flex flex-col items-center">
            <h4 className="text-white text-center">Address</h4>
            <p className="text-white text-center">
              Ghodemal, A/P dingore, Junnar, Dist - Pune - 421 209
            </p>
            <br />
            <p className="text-white text-center">
              contact@malshejagro@gmail.com
            </p>
            <p className="text-white text-center">+91-7666999143</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
