import Room from "@/components/Room";
import React from "react";

const RoomsSection = () => {
  return (
    <>
      <div className="py-20 p-5">
        <h5 className="text-center">Luxury Property</h5>
        <br />
        <h2 className="text-center md:w-1/2 mx-auto">
          Rest in Nature, Feel the class, Find your Freedom!
        </h2>
        <br />
        <p className="text-center md:w-2/3 mx-auto">
          The accommodation area is surrounded by farm on all sides, with
          plantation as well. Our agro resort is surrounded by Sahyadri range of
          mountains and exotic malshej ghat views.
        </p>

        <div className="flex flex-wrap md:p-5 py-10 mt-10 max-w-7xl justify-center mx-auto">
          <Room
            image="/images/family-room-1.jpeg"
            title="Family Room"
            desc="Relax in our spacious family room, designed for comfort and
              togetherness."
            url=""
          />
          <Room
            image="/images/bamboo-3.jpeg"
            title="Bamboo Huts"
            desc="Immerse yourself in nature's embrace within our charming Bamboo Huts."
            url=""
          />
          <Room
            image="/images/family-room-3.jpeg"
            title="Group Room"
            desc="Experience shared moments in our expansive group room, designed for comfort"
            url=""
          />
          <Room
            image="/images/cottage2.jpeg"
            title="Cottage"
            desc="Combining rustic elegance with modern comforts for an unforgettable stay."
            url=""
          />
          <Room
            image="/images/villa-5.jpeg"
            title="AC Villa"
            desc="Indulge in luxury and comfort within our air-conditioned villa featuring exquisite design."
            url=""
          />
        </div>
      </div>
    </>
  );
};

export default RoomsSection;
