import React from "react";

const CTA = () => {
  return (
    <section className="w-full p-4 md:p-2 bg-[#d2ba9c]">
      <div className="max-w-[672px] mx-auto text-center my-4">
        <p className="my-2 text-[#faf3e0] text-md md:text-2xl">
          SMALL AND LARGE GROUPS WELCOMED
        </p>
        <h1 className="font-bold text-3xl md:text-5xl my-2 text-[#faf3e0]">
          RESERVE YOUR SERENI-TEA EXPERIENCE TODAY
        </h1>
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

export default CTA;
