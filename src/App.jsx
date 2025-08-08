import { useState } from "react";
import CTA from "./Components/CTA";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import HistorySection from "./Components/HistorySection";
import LocationHours from "./Components/LocationHours";
import Footer from "./Components/Footer";
import ColonialSection from "./Components/ColonialSection";
import WelcomeSection from "./Components/WelcomeSection";
import WhatToExpectSection from "./Components/WhatToExpectSection";
import WhoSection from "./Components/WhoSection";
import DiningRooms from "./Components/DiningRooms";
import SpecialDaysSection from "./Components/SpecialDaysSection";
import FAQSection from "./Components/FAQSection";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <WelcomeSection />
      <ColonialSection />
      <WhatToExpectSection />
      <CTA />
      <WhoSection />
      <HistorySection />
      <DiningRooms />
      <SpecialDaysSection />
      <LocationHours />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
