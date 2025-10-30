import React, { useState, useEffect } from "react";
import logo from "../assets/MissPollysShortLogo-cropped.png";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close on scroll
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleScroll = () => setIsMenuOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setIsMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Optional: compensate for sticky header when using hash links
  const handleAnchorClick = () => setIsMenuOpen(false);

  return (
    <section className="sticky top-0 z-50 w-full h-[70px] bg-[#c4b9cd] flex justify-between items-center px-4 md:px-8">
      {/* Left: Logo + Title */}
      <a href="#hero" className="flex items-center gap-2">
        <img src={logo} alt="Miss Polly's Logo" className="h-16 w-auto" />
        <h1 className="hidden md:block uppercase text-xl text-[#faf3e0]">
          Miss Polly's Tea Room
        </h1>
      </a>

      {/* Right: Hamburger (always) */}
      <button
        onClick={() => setIsMenuOpen((o) => !o)}
        className="text-3xl font-semibold text-[#faf3e0] cursor-pointer focus:outline-none"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        aria-controls="main-menu"
      >
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Backdrop + Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Fade backdrop that also closes on click */}
            <motion.button
              type="button"
              aria-hidden="true"
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/30 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Slide/fade dropdown panel */}
            <motion.nav
              id="main-menu"
              className="absolute top-[70px] right-0 w-full sm:w-[420px] bg-white shadow-md z-50"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <ul className="flex flex-col gap-1 text-center font-bold text-slate-700">
                {[
                  { href: "#hero", label: "Home" },
                  { href: "#upcomingevents", label: "Upcoming Events" },
                  { href: "#history", label: "History of 218 Valley Ct" },
                  { href: "#expect", label: "What To Expect" },
                  { href: "#currentmenu", label: "Current Menu" },
                  { href: "#who", label: "Who Is Miss Polly?" },
                  { href: "#tea", label: "History of Afternoon Tea" },
                  { href: "#dining", label: "Dining Rooms" },
                  { href: "#events", label: "Polly's Parties" },
                  { href: "#contact", label: "Contact Us" },
                  { href: "#location", label: "Location & Hours" },
                  { href: "#faqs", label: "Frequently Asked Questions" },
                  {
                    href: "https://miss-pollys.resos.com/booking",
                    label: "Reserve",
                  },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={handleAnchorClick}
                      className="block w-full py-3 px-4 hover:bg-gray-100 rounded cursor-pointer transition"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default NavBar;
