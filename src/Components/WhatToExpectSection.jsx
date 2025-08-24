import React from "react";
import roseRoomTable from "../assets/rose-room-table.jpeg";

const WhatToExpectSection = () => {
  return (
    <section id="expect" className="bg-[#faf3e0]">
      {/* Event Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-[80%] lg:w-full mx-auto pb-[100px]">
        {/* Right side on desktop, top on mobile */}
        <div className="order-1 md:order-2 p-6">
          <p className="uppercase text-sm text-[#d8a7b1] text-center mt-4 md:text-lg">
            when arriving
          </p>
          <h2 className="uppercase tracking-widest text-2xl text-center">
            what to expect
          </h2>
          <p className="font-bold text-sm md:text-md lg:text-lg p-4 mt-2 text-center md:text-left">
            Pricing: $35 / person
          </p>
          <p className="text-sm md:text-md lg:text-lg p-4 mt-2 text-center md:text-left">
            Due to limited seating and to ensure the finest and freshest
            ingredients, prepayment is required. Cash gratuity is appreciated
            but not required.
          </p>
          <p className="text-sm md:text-md lg:text-lg p-4 mt-2 text-justify">
            When you come to Miss Polly's you will be greeted by one of our
            smiling faces and shown to your table. Your room host will advise
            you of our hot tea selections. If you prefer a cold beverage option
            we will have those available as well. Once your beverage order has
            been served your room host will present the table with your tiered
            tray. The tiered tray will contain 4-5 savory items per person, 2
            scones per person and 3-4 sweet items per person. The table will be
            provided with Devon cream, jam and marmalade for your scones, cream
            sugar and lemon for your tea. Please take your time enjoying each
            bite and sip! We want your time with us to be relaxed and enjoyable.
            Tea is meant to be a treat!
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

export default WhatToExpectSection;
