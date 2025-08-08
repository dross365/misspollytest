import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#d8a7b1] w-full py-6">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Social Icons */}
        <div className="flex gap-6 mb-4 md:mb-0">
          <a
            href="https://www.instagram.com/misspollystearoom/profilecard/?igsh=azIxMmY1bjFwaHRk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 text-xl"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61575761866611"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 text-xl"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-white text-center">
          &copy; 2025 Miss Polly’s Tea Room. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
