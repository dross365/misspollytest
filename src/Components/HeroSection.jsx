import React from "react";
import heroImage from "../assets/hero-image.png";
import longLogo from "../assets/light-logo.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative h-[500px] lg:h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-center text-white"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 px-4">
        <h1 className="text-lg md:text-2xl font-bold mb-2 uppercase text-[#faf3e0]">
          Miss Polly's Tea Room
        </h1>
        <p className="text-4xl font-bold md:text-6xl mb-6 max-w-xl mx-auto text-[#faf3e0] leading-relaxed uppercase">
          It's Tea Time!
        </p>
        <img
          src={longLogo}
          className="w-[280px] md:w-[317px] h-auto mx-auto my-3"
        />
        <p className="text-lg md:text-2xl mb-2 text-[#faf3e0] uppercase tracking-wider">
          come join us, bring your friends!
        </p>
        <a
          href="https://miss-pollys.resos.com/booking"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto bg-[#d6e4c2] text-sm md:text-lg text-black uppercase py-3 my-2 px-4 rounded-md font-semibold tracking-widest inline-block text-center"
        >
          RESERVE NOW
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
