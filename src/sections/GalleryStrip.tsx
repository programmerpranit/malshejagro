import Image from "next/image";
import Link from "next/link";
import React from "react";

const GalleryStrip = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col flex-wrap justify-center gap-5 my-40">
        <ZoomImage img="/images/hut.jpeg" />
        <ZoomImage img="/images/hut1.jpeg" />
        <ZoomImage img="/images/MA11.jpeg" />
        <div className="h-40 md:w-40 flex justify-center items-center">
          <Link href={"/gallery"}>
            <button>Gallery</button>
          </Link>
        </div>
        <ZoomImage img="/images/top-slider2.jpeg" />
        <ZoomImage img="/images/malshejbg.jpeg" />
        <ZoomImage img="/images/villa0.jpeg" />
      </div>
    </>
  );
};

export default GalleryStrip;

function ZoomImage({ img }: { img: string }) {
  return (
    <>
      <div className="md:h-40 md:w-40 h-56  overflow-hidden">
        <Image
          width={400}
          height={400}
          className="w-full h-full object-cover hover:scale-110"
          src={img}
          alt=""
        />
      </div>
    </>
  );
}
