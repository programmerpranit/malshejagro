import Room from "@/components/Room";
import React from "react";

const RoomsSection = () => {
  return (
    <>
      <div
        id="rooms"
        className="pt-20 md:p-5 bg-[url('/bg-leaf.png')] bg-opacity-25"
      >
        <div className="max-md:p-5">
          <h5 className="text-center">Luxury Property</h5>
          <br />
          <h2 className="text-center md:w-1/2 mx-auto">
            Rest in Nature, Feel the class, Find your Freedom!
          </h2>
          <br />
          <p className="text-center md:w-2/3 mx-auto">
            The accommodation area is surrounded by farm on all sides, with
            plantation as well. Our agro resort is surrounded by Sahyadri range
            of mountains and exotic malshej ghat views.
          </p>
        </div>

        <div className="flex flex-wrap md:p-5 py-10 mt-10 max-w-7xl justify-center mx-auto">
          <Room
            image="/images/cottage/cottages3.jpg"
            title="Cottage"
            desc="Combining rustic elegance with modern comforts for an unforgettable stay."
            url="/cottage"
          />
          <Room
            image="/images/acvilla/ac-villa4.jpg"
            title="AC Villa"
            desc="Indulge in luxury and comfort within our air-conditioned villa featuring exquisite design."
            url="/ac-villa"
          />
          <Room
            image="/images/bamboohuts/bamboo2.jpg"
            title="Bamboo Huts"
            desc="Immerse yourself in nature's embrace within our charming Bamboo Huts."
            url="/bamboohuts"
          />
          <Room
            image="/images/grouproom/group3.jpg"
            title="Group Room"
            desc="Experience shared moments in our expansive group room, designed for comfort"
            url="/grouproom"
          />
          <Room
            image="/images/family-rooms/family2.jpg"
            title="Family Room"
            desc="Relax in our spacious family room, designed for comfort and
              togetherness."
            url="/familyroom"
          />
        </div>
      </div>
    </>
  );
};

export default RoomsSection;
