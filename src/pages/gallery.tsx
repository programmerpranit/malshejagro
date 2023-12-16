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
          <Photo img="/images/g22.jpg" setImage={setImage} />
          <Photo img="/images/g3.jpg" setImage={setImage} />
          <Photo img="/images/g4.jpg" setImage={setImage} />
          <Photo img="/images/g5.jpeg" setImage={setImage} />
          {/* <Photo img="/images/g6.jpeg" setImage={setImage} /> */}
          <Photo img="/images/hall.jpeg" setImage={setImage} />
          <Photo img="/images/food/food1.jpeg" setImage={setImage} />
          <Photo img="/images/villa/villa2.jpeg" setImage={setImage} />
          <Photo img="/images/g7.jpeg" setImage={setImage} />
          <Photo img="/images/g2.jpg" setImage={setImage} />
          <Photo img="/images/cottage/cottage5.jpg" setImage={setImage} />
          <Photo img="/images/cottage/cottage6.jpg" setImage={setImage} />
          <Photo img="/images/g12.jpg" setImage={setImage} />
          <Photo img="/images/g13.jpg" setImage={setImage} />
          <Photo img="/images/g14.jpg" setImage={setImage} />
          <Photo img="/images/g15.jpg" setImage={setImage} />
          <Photo img="/images/g16.jpg" setImage={setImage} />
          <Photo img="/images/g17.jpg" setImage={setImage} />
          <Photo img="/images/g18.jpg" setImage={setImage} />
          <Photo img="/images/g19.jpg" setImage={setImage} />
          <Photo img="/images/g20.jpg" setImage={setImage} />
          <Photo img="/images/g21.jpg" setImage={setImage} />
          <Photo img="/images/bamboohuts/bamboo8.jpg" setImage={setImage} />
          <Photo img="/images/bamboohuts/bamboo9.jpg" setImage={setImage} />
          <Photo img="/images/bamboohuts/bamboo11.jpg" setImage={setImage} />
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
