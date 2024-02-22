import React from "react";
import { FaChessKing, FaSwimmer } from "react-icons/fa";
import { MdSportsCricket, MdPets } from "react-icons/md";
import { FiCloudRain } from "react-icons/fi";
import { IoMdBonfire } from "react-icons/io";
import { GiMicrophone } from "react-icons/gi";
import { HiMiniSparkles } from "react-icons/hi2";
const FacilitiesSection = () => {
  return (
    <>
      <div id="facilities" className="md:p-20 p-5 pt-20 bg-accent">
        <h5 className="text-center">Facilities</h5>
        <br />
        <h2 className="text-center md:w-1/2 mx-auto">
          We have number of activities for every age group to stay active during
          the vacation.{" "}
        </h2>
        <div className="flex flex-wrap justify-center py-10">
          <Facility
            title={"Indoor Games"}
            desc="Our variety of Indoor Games are for those who want to make the most of their vacation."
            icon={<FaChessKing size={50} color={"#395846"} />}
          />
          <Facility
            title={"Outdoor Games"}
            desc="Whether looking for a short break or a day full of outdoors, we have it all at our Malshej Agro Tourism and Farm."
            icon={<MdSportsCricket size={55} color={"#395846"} />}
          />
          <Facility
            title={"Swimming Pool"}
            desc="A dive in a clear and clean water on a sunny day is bound to trace away all your blues."
            icon={<FaSwimmer size={60} color={"#395846"} />}
          />
          <Facility
            title={"Rain Dance"}
            desc="Experience exhilarating fun under cascading water jets in our vibrant Rain Dance area."
            icon={<FiCloudRain size={60} color={"#395846"} />}
          />
          <Facility
            title={"Pet Friendly"}
            desc="Welcome pets to our resort, where furry friends are treated like family in our pet-friendly accommodations."
            icon={<MdPets size={60} color={"#395846"} />}
          />
          <Facility
            title={"Bonfire"}
            desc="Gather around the crackling flames for cozy evenings of storytelling and camaraderie at our enchanting bonfire pit."
            icon={<IoMdBonfire size={60} color={"#395846"} />}
          />
          <Facility
            title={"Karaoke"}
            desc="Unleash your inner superstar and sing your heart out at our lively karaoke nights, filled with music and fun."
            icon={<GiMicrophone size={60} color={"#395846"} />}
          />
          <Facility
            title={"Wedding Venue"}
            desc="Marry in scenic beauty at our elegant wedding venue, where dreams come true."
            icon={<HiMiniSparkles size={60} color={"#395846"} />}
          />
        </div>
      </div>
    </>
  );
};

export default FacilitiesSection;

const Facility = ({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: any;
}) => {
  return (
    <>
      <div className="text-center md:w-1/3 p-10">
        <div className="flex justify-center h-20">{icon}</div>
        <h4>{title}</h4>
        <br />
        <p>{desc}</p>
      </div>
    </>
  );
};
