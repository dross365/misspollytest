import React from "react";
import cabinet from "../assets/cabinet.JPG";
import fireplaceDeco from "../assets/fireplace-deco.JPG";

const ColonialSection = () => {
  return (
    <section id="history" className="bg-[#faf3e0] pb-[50px]">
      {/* Colonial Section */}
      <div className="md:w-full grid grid-cols-1 md:grid-cols-4">
        {/* Column 1: Text Content */}
        <div className="p-2 m-4 md:col-span-2">
          <p className="uppercase text-sm text-[#d8a7b1] text-center mt-4 md:text-lg">
            the charming
          </p>
          <h2 className="uppercase tracking-widest text-2xl text-center mt-2">
            historic colonial setting
          </h2>
          <p className="text-sm md:text-lg w-[90%] md:w-[80%] mx-auto text-justify md:text-left mt-4">
            Built circa 1880 by Thomas Marion Sanders, this stately Greek
            Revival residence showcases a commanding two-story portico supported
            by classical columns and capped with a pediment—hallmarks of the
            style, echoing the nearby Sam Davis Home, another celebrated Greek
            Revival landmark in Smyrna . Originally serving as Sanders’ private
            residence, the home later found adaptive reuse as a photography
            studio before undergoing transformation into “Grandma’s House,” a
            charming bed-and-breakfast that preserved much of its original
            architectural character. In 2025, the property embraced a new
            chapter as Miss Polly’s Tea Room, bringing renewed community
            engagement to the historic structure while thoughtfully maintaining
            its distinctive 19th-century design features. Reflecting Smyrna’s
            architectural and cultural heritage, The Sanders House stands as
            both a local landmark and a living testament to the town’s evolving
            identity.
          </p>
        </div>

        {/* Column 2: Image Container */}
        <div className="md:col-span-1 flex items-center justify-center">
          <img
            src={cabinet}
            alt="corner cabinet"
            className="w-48 md:w-80 mb-6 h-auto mx-auto rounded-lg shadow-lg my-auto"
          />
        </div>
        <div className="md:col-span-1 flex items-center justify-center">
          <img
            src={fireplaceDeco}
            alt="fireplace decorations"
            className="w-48 md:w-80 mb-6 h-auto mx-auto rounded-lg shadow-lg my-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ColonialSection;
