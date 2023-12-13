import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";

const Gallery = () => {
  const [image, setImage] = useState("");
  return (
    <>
      {image && (
        <div
          onClick={() => setImage("")}
          className="fixed w-screen h-screen bg-primary bg-opacity-50 top-0"
        >
          <div className="relative">
            <div
              onClick={() => setImage("")}
              className="absolute top-5 right-10 text-3xl text-white cursor-pointer"
            >
              X
            </div>
            <Image
              className="p-3 m-auto my-5"
              width={1000}
              height={1000}
              src={image}
              alt=""
            />
          </div>
        </div>
      )}
      <div className="p-5">
        <h1>Photo Gallery</h1>

        <div className="flex flex-wrap my-5 ">
          <Photo img="/images/g3.jpg" setImage={setImage} />
          <Photo img="/images/g4.jpg" setImage={setImage} />
          <Photo img="/images/g5.jpeg" setImage={setImage} />
          {/* <Photo img="/images/g6.jpeg" setImage={setImage} /> */}
          <Photo img="/images/hall.jpeg" setImage={setImage} />
          <Photo img="/images/food/food1.jpeg" setImage={setImage} />
          <Photo img="/images/villa/villa2.jpeg" setImage={setImage} />
          <Photo img="/images/g7.jpeg" setImage={setImage} />
          <Photo img="/images/g2.jpg" setImage={setImage} />
        </div>
      </div>
    </>
  );
};

export default Gallery;

interface PhotoProps {
  setImage: Dispatch<SetStateAction<string>>;
  img: string;
}

const Photo = ({ setImage, img }: PhotoProps) => {
  return (
    <>
      <Image
        className="p-3 md:w-1/4 w-1/2 cursor-pointer object-contain"
        width={500}
        height={500}
        onClick={() => setImage(img)}
        src={img}
        alt=""
      />
    </>
  );
};
