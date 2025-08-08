import React from "react";
import roseRoomTable from "../assets/rose-room-table.jpeg";

const EventDaySection = () => {
  return (
    <section className="bg-[#faf3e0]">
      {/* Event Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-[80%] lg:w-full mx-auto pb-[100px]">
        {/* Right side on desktop, top on mobile */}
        <div className="order-1 md:order-2 p-6">
          <h2 className="uppercase tracking-widest text-2xl text-center mt-2 p-4">
            'event' day afternoon tea
          </h2>
          <p className="text-center text-sm md:text-md lg:text-lg p-4 mt-2 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at
            egestas dui, in pulvinar augue. Aliquam eu ultrices lorem. Etiam
            laoreet magna quis diam rutrum efficitur. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae;
            Vestibulum vitae commodo mi. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Mauris non sagittis ex, ut efficitur risus. Integer
            a justo id elit hendrerit tincidunt. Aenean finibus gravida
            facilisis. Nunc aliquam ipsum ac elit consequat consectetur. Donec
            dapibus, leo id condimentum tristique, enim magna venenatis tellus,
            et accumsan nibh massa eget risus. Quisque dolor elit, tincidunt vel
            molestie id, lacinia hendrerit magna. Vestibulum condimentum
            eleifend pharetra.
          </p>
        </div>
        {/* Left side of desktop, bottom on mobile */}
        <div className="order-2 md:order-1 flex items-center justify-center">
          <img
            src={roseRoomTable}
            alt="rose room table"
            className="w-64 md:w-128 mb-6 h-auto mx-auto rounded-lg shadow-lg my-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default EventDaySection;
