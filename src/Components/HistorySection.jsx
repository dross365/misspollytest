import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faMugHot,
  faHollyBerry,
} from "@fortawesome/free-solid-svg-icons";
import { faPagelines } from "@fortawesome/free-brands-svg-icons";
import portrait from "../assets/portrait.JPG";

const HistorySection = () => {
  return (
    <section id="tea" className="bg-[#faf3e0]">
      {/* About */}
      <div className="bg-[#d8a7b1] flex flex-col items-center justify-center">
        <h3 className="font-semibold text-lg uppercase text-[#faf3e0] pt-[60px] md:pt-[50px] md:text-2xl">
          history of afternoon tea
        </h3>
        <p className="text-sm text-[#faf3e0] text-justify md:text-center mt-4 w-[80%] mx-auto mb-4 md:max-w-[800px] md:text-lg">
          Tea’s story begins in ancient China, where legend credits Emperor Shen
          Nong with its discovery around 2737 BCE when tea leaves drifted into
          his boiling water. Initially valued for medicinal qualities, tea
          evolved into a daily beverage and cultural ritual, spreading to Japan
          by the early centuries CE via Buddhist monks. By the 17th century,
          European traders—particularly the Dutch and British East India
          Companies—had introduced tea to the West, where it became a
          fashionable luxury and later a staple. In Britain, the rise of
          afternoon tea in the 1800s cemented tea’s social role, while global
          cultivation expanded into India, Sri Lanka, and Africa under colonial
          influence. Today, tea is the world’s most consumed beverage after
          water, with countless varieties and cultural traditions woven into its
          history.
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
