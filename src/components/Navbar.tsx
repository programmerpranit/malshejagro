import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <div className="flex absolute w-full z-50 p-5 md:px-20 justify-between items-center">
        <Image width={60} height={60} src={"/logo.png"} alt="" />
        <div
          onClick={() => setNavbar(!navbar)}
          className={`w-10 h-10 border-2 border-white flex flex-col p-2 justify-around cursor-pointer`}
        >
          <div className="h-0.5 bg-white w-full"></div>
          <div className="h-0.5 bg-white w-full"></div>
          <div className="h-0.5 bg-white w-full"></div>
        </div>
      </div>

      <div
        className={`${
          navbar ? "h-screen" : "h-0"
        } transition-all duration-500 ease-in-out bg-heading fixed z-40 w-full`}
      >
        <div
          className={`${
            navbar ? "translate-y-60" : "-translate-y-60 opacity-0"
          } flex justify-center flex-col gap-5 text-center transition-all duration-300 ease-in-out`}
        >
          <Link href={"/#facilities"}>
            <p onClick={() => setNavbar(false)} className="text-white">
              Facilities
            </p>
          </Link>
          <Link href={"/#rooms"}>
            <p onClick={() => setNavbar(false)} className="text-white">
              Rooms
            </p>
          </Link>
          <Link href={"/#contact"}>
            <p onClick={() => setNavbar(false)} className="text-white">
              Contact
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
