import React from "react";
import celeste from "../assets/celeste.JPG";
import cleo from "../assets/cleo.JPG";
import rose from "../assets/rose.JPG";

const DiningRooms = () => {
  return (
    <section id="dining" className="bg-[#faf3e0] pt-[20px]">
      <div>
        <h2 className="uppercase tracking-widest text-2xl text-center">
          dining rooms
        </h2>
        <p className="text-sm text-black text-justify md:text-center mt-4 w-[80%] mx-auto md:max-w-[800px] md:text-lg">
          Dine in one of our three beautifully appointed rooms.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div>
          <p className="uppercase text-sm text-[#d8a7b1] text-center mt-4 md:text-lg">
            celeste
          </p>
          <img
            src={celeste}
            alt="celeste dining room"
            className="w-72 lg:w-96 h-auto mx-auto rounded-lg shadow-lg my-3"
          />
        </div>
        <div>
          <p className="uppercase text-sm text-[#d8a7b1] text-center mt-4 md:text-lg">
            cleo
          </p>
          <img
            src={cleo}
            alt="cleo dining room"
            className="w-72 lg:w-96 h-auto mx-auto rounded-lg shadow-lg my-3"
          />
        </div>
        <div>
          <p className="uppercase text-sm text-[#d8a7b1] text-center mt-4 md:text-lg">
            rose
          </p>
          <img
            src={rose}
            alt="rose dining room"
            className="w-72 lg:w-96 h-auto mx-auto rounded-lg shadow-lg my-3"
          />
        </div>
      </div>
    </section>
  );
};

export default DiningRooms;
