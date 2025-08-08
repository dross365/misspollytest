import React from "react";
import historic1 from "../assets/historic-1.jpg";
import historic2 from "../assets/historic-2.jpg";

const WhoSection = () => {
  return (
    <section id="who" className="bg-[#faf3e0] pb-[50px]">
      <div className="grid grid-cols-1 md:grid-cols-4 md:items-center gap-6">
        {/* Text Content */}
        <div className="p-2 m-4 md:col-span-2 md:order-3">
          <h2 className="uppercase tracking-widest text-2xl text-center mt-2">
            who is miss polly?
          </h2>
          <p className="text-sm md:text-lg w-[90%] md:w-[80%] mx-auto text-justify md:text-left mt-4">
            Miss Polly is inspired by the legacy of two remarkable women who
            shared not only a name, but a spirit of love and service.{" "}
            <b>Mary “Polly” Sanders</b>, mother of Thomas Marion Sanders, gave
            her life in an act of selfless bravery, saving another.{" "}
            <b>Anna “Polly” Chambliss</b>, mother of Jana Gregory’s dearest
            childhood friend, devoted her days to caring for others and serving
            her community. Their kindness, courage, and generosity shaped this
            home and touched the lives of all who have passed through its doors.
            Miss Polly’s Tea Room honors their memory, carrying forward the
            grace and hospitality they so beautifully embodied.
          </p>
        </div>

        {/* Images */}
        <div className="md:order-1 flex justify-center">
          <img
            src={historic1}
            alt="corner cabinet"
            className="w-72 md:w-80 h-auto mx-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="md:order-2 flex justify-center">
          <img
            src={historic2}
            alt="fireplace decorations"
            className="w-72 md:w-80 h-auto mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoSection;
