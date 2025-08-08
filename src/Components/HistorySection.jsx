import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faMugHot,
  faHollyBerry,
} from "@fortawesome/free-solid-svg-icons";
import { faPagelines } from "@fortawesome/free-brands-svg-icons";
import portrait from "../assets/portrait.jpg";

const HistorySection = () => {
  return (
    <section id="tea" className="bg-[#faf3e0]">
      {/* About */}
      <div className="bg-[#d8a7b1] flex flex-col items-center justify-center">
        <h3 className="font-semibold text-lg uppercase text-[#faf3e0] pt-[60px] md:pt-[50px] md:text-2xl">
          history of afternoon tea
        </h3>
        <p className="text-sm text-[#faf3e0] text-justify md:text-center mt-4 w-[80%] mx-auto mb-4 md:max-w-[800px] md:text-lg">
          Afternoon tea was introduced in England by Anna, the seventh Duchess
          of Bedford, in the year 1840. The Duchess would become hungry around
          four o'clock in the afternoon. The evening meal in her household was
          served fashionably late at eight o'clock, thus leaving a long period
          of time between lunch and dinner. The Duchess asked that a tray of
          tea, bread and butter (some time earlier, the Earl of Sandwich had had
          the idea of putting a filling between two slices of bread) and cake be
          brought to her room during the lat afternoon. This became a habit of
          hers and she began inviting friends to join her.
        </p>
        <p className="text-sm text-[#faf3e0] text-justify md:text-center mt-4 w-[80%] mx-auto mb-4 md:max-w-[800px] md:text-lg">
          This pause for tea became a fashionable social event. Durign the
          1880's upper-class and society women would change into long gowns,
          gloves and hats for their afternoon tea which was usually served in
          the drawing room between four and five o'clock.
        </p>
        <p className="text-sm text-[#faf3e0] text-justify md:text-center mt-4 w-[80%] mx-auto mb-4 md:max-w-[800px] md:text-lg">
          Today, both high tea and afternoon tea have the same purpose, to
          socialize with family and friends. They are enjoyed by everyone, no
          matter their social class.
        </p>
        <img
          src={portrait}
          alt="portrait"
          className="w-72 md:w-112 h-auto mx-auto rounded-lg shadow-lg my-3"
        />
        <p className="p-3 text-[#faf3e0] text-md md:text-2xl uppercase font-bold">
          grand opening - august 16th 2025
        </p>
        <a
          href="https://miss-pollys.resos.com/booking"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto bg-[#d6e4c2] text-sm md:text-lg text-black uppercase py-3 my-2 px-4 rounded-md font-semibold tracking-widest inline-block text-center mb-6"
        >
          RESERVE NOW
        </a>
      </div>
    </section>
  );
};

export default HistorySection;
