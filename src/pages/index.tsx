import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CorporateMeetings from "@/sections/CorporateMeetings";
import EventsWeddings from "@/sections/EventsWeddings";
import FacilitiesSection from "@/sections/FacilitiesSection";
import LuxuryFarmVilla from "@/sections/LuxuryFarmVilla";
import Restaurent from "@/sections/Restaurent";
import RoomsSection from "@/sections/RoomsSection";
import TopSection from "@/sections/TopSection";
import React from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <TopSection />
      <FacilitiesSection />
      <RoomsSection />
      <LuxuryFarmVilla />
      <EventsWeddings />
      <CorporateMeetings />
      <Restaurent />
      <div className="p-10"></div>
      <Footer />
    </>
  );
}
