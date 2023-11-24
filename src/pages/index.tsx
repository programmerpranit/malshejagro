import Navbar from "@/components/Navbar";
import FacilitiesSection from "@/sections/FacilitiesSection";
import TopSection from "@/sections/TopSection";
import React from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <TopSection />
      <FacilitiesSection />
      <div className="p-20"></div>
    </>
  );
}
