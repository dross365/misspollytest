import React from "react";
import thanksgiving from "../assets/friends-dinner.jpeg";
import december from "../assets/december-events.jpeg";

const UpcomingEventsSection = () => {
  return (
    <section id="upcomingevents" className="bg-[#faf3e0] pt-[20px]">
      <div>
        <h2 className="uppercase tracking-widest text-2xl text-center">
          upcoming events
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <p className="uppercase text-sm text-[#000] text-center mt-4 md:text-lg">
            friends thanksgiving dinner & trivia
          </p>
          <img
            src={thanksgiving}
            alt="celeste dining room"
            className="w-72 lg:w-120 h-auto mx-auto rounded-lg shadow-lg my-3"
          />
        </div>
        <div>
          <p className="uppercase text-sm text-[#000] text-center mt-4 md:text-lg">
            december at miss polly's
          </p>
          <img
            src={december}
            alt="cleo dining room"
            className="w-72 lg:w-120 h-auto mx-auto rounded-lg shadow-lg my-3"
          />
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;
