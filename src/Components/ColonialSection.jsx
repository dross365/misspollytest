import React from "react";
import cabinet from "../assets/cabinet.JPG";
import fireplaceDeco from "../assets/fireplace-deco.JPG";

const ColonialSection = () => {
  return (
    <section id="history" className="bg-[#faf3e0] pb-[50px]">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-center">
        {/* Text: spans 2 cols on lg */}
        <div className="p-2 m-4 lg:col-span-2">
          <p className="uppercase text-sm text-[#d8a7b1] text-center mt-4 lg:text-lg">
            the charming
          </p>
          <h2 className="uppercase tracking-widest text-2xl text-center mt-2">
            historic colonial setting
          </h2>
          <p className="text-sm lg:text-lg w-[90%] lg:w-[80%] mx-auto text-justify lg:text-left mt-4">
            Built circa 1880 by Thomas Marion Sanders, this stately Greek
            Revival residence showcases a commanding two-story portico supported
            by classical columns and capped with a pediment—hallmarks of the
            style, echoing the nearby Sam Davis Home, another celebrated Greek
            Revival landmark in Smyrna. Originally serving as Sanders’ private
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

        {/* Images: mobile/medium (side-by-side under text) */}
        <div className="flex justify-center gap-4 lg:hidden">
          <img
            src={cabinet}
            alt="corner cabinet"
            className="w-40 sm:w-48 h-auto rounded-lg shadow-lg"
          />
          <img
            src={fireplaceDeco}
            alt="fireplace decorations"
            className="w-40 sm:w-48 h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Images: large screens (each in its own grid column) */}
        <div className="hidden lg:flex items-center justify-center">
          <img
            src={cabinet}
            alt="corner cabinet"
            className="w-72 xl:w-80 h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="hidden lg:flex items-center justify-center">
          <img
            src={fireplaceDeco}
            alt="fireplace decorations"
            className="w-72 xl:w-80 h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ColonialSection;
