import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";
import gsap from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import MessageSection from "./sections/MessageSection";
import FlavourSection from "./sections/FlavourSection";
import { useGSAP } from "@gsap/react";
import NutritionSection from "./sections/NutritionSection";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const App = () => {
  const App = () => {
    useGSAP(() => {
      ScrollSmoother.create({
        smooth: 3,
        effects: true,
      });
    });
  };
  return (
    <main>
      <NavBar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavourSection />
          <NutritionSection />
          <div className="h-dvh border border-red-500" />
        </div>
      </div>
    </main>
  );
};

export default App;
