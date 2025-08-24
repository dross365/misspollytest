import { section } from "framer-motion/client";
import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-[#faf3e0] p-[50px]">
      <h2 className="uppercase tracking-widest text-2xl text-center mt-2">
        Contact Us
      </h2>
      <p className="text-md font-semibold uppercase md:text-lg w-[90%] md:w-[80%] mx-auto text-center mt-4">
        general
      </p>
      <p className="text-sm md:text-lg w-[90%] md:w-[80%] mx-auto text-center mb-2">
        info@misspollystearoom.com
      </p>
    </section>
  );
};

export default ContactSection;
