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
          <Photo setImage={setImage} img="/images/ext/1.jpeg" />
          <Photo setImage={setImage} img="/images/ext/2.jpeg" />
          <Photo setImage={setImage} img="/images/ext/3.jpeg" />
          <Photo setImage={setImage} img="/images/ext/4.jpeg" />
          <Photo setImage={setImage} img="/images/ext/5.jpeg" />
          <Photo setImage={setImage} img="/images/ext/6.jpeg" />
          <Photo setImage={setImage} img="/images/ext/7.jpeg" />
          <Photo setImage={setImage} img="/images/ext/8.jpeg" />
          <Photo setImage={setImage} img="/images/ext/9.jpeg" />
          <Photo setImage={setImage} img="/images/ext/10.jpeg" />
          <Photo setImage={setImage} img="/images/ext/11.jpeg" />
          <Photo setImage={setImage} img="/images/ext/12.jpeg" />
          <Photo setImage={setImage} img="/images/ext/13.jpeg" />
          <Photo setImage={setImage} img="/images/ext/14.jpeg" />
          <Photo setImage={setImage} img="/images/ext/15.jpeg" />
          <Photo setImage={setImage} img="/images/ext/16.jpeg" />
          <Photo setImage={setImage} img="/images/ext/17.jpeg" />
          <Photo setImage={setImage} img="/images/ext/18.jpeg" />
          <Photo setImage={setImage} img="/images/ext/19.jpeg" />
          <Photo setImage={setImage} img="/images/ext/20.jpeg" />
          <Photo setImage={setImage} img="/images/ext/21.jpeg" />
          <Photo setImage={setImage} img="/images/ext/22.jpeg" />
          <Photo setImage={setImage} img="/images/ext/23.jpeg" />
          <Photo setImage={setImage} img="/images/ext/10.jpeg" />
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
        className="p-3 md:w-1/4 w-1/2 cursor-pointer "
        width={500}
        height={500}
        onClick={() => setImage(img)}
        src={img}
        alt=""
      />
    </>
  );
};
