import React from "react";
import currentMenu from "../assets/current_menu.jpeg";

const CurrentMenuSection = () => {
  return (
    <section id="currentmenu" className="bg-[#faf3e0] pt-[20px]">
      <div>
        <h2 className="uppercase tracking-widest text-2xl text-center">
          current menu
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 pb-4 pt-4">
        <div>
          <img
            src={currentMenu}
            alt="celeste dining room"
            className="w-72 lg:w-120 h-auto mx-auto rounded-lg shadow-lg my-3"
          />
        </div>
      </div>
    </section>
  );
};

export default CurrentMenuSection;
