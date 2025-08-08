import React from "react";
import missPollyNight from "../assets/miss-pollys-night.jpg";

const WelcomeSection = () => {
  return (
    <section className="bg-[#faf3e0] md:pt-[50px]">
      <div className="flex flex-col md:flex-row">
        <div className="order-2 md:order-1 p-3 md:p-6 flex justify-center w-full md:w-1/2">
          <img
            src={missPollyNight}
            alt="miss polly's tea room at night"
            className="w-72 md:w-128 mb-6 h-auto mx-auto rounded-lg shadow-lg my-auto"
          />
        </div>
        <div className="order-1 md:order-2 w-full md:w-1/2 py-[40px]">
          <h2 className="uppercase tracking-widest text-2xl w-[80%] mx-auto text-center mt-2 text-[#d8a7b1]">
            welcome to miss polly's tea room
          </h2>
          <p className="text-sm md:text-lg w-[80%] mx-auto text-center md:text-left mt-4">
            Miss Polly's is located in Smyrna, Tennessee inside the beautiful
            Victorian Sanders House.
          </p>

          <p className="text-sm md:text-lg w-[80%] mx-auto text-center md:text-left mt-4">
            At Miss Polly's we serve traditional afternoon tea each week on
            Friday (starting 9/5), Saturday and Sunday.
          </p>
          <p className="text-sm md:text-lg w-[80%] mx-auto text-center md:text-left mt-4">
            We have two seatings each day at 1:00pm and 3:00pm.
          </p>
          <p className="text-sm md:text-lg w-[80%] mx-auto text-center md:text-left mt-4">
            Our tea menu is meticulously prepared daily and seating is limited,
            so reservations are required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
