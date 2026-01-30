import React from "react";
import HeroCarousel from "./HeroCarousel.jsx";
import NewswireSection from "./NewswireSection";
import FeaturedGames from "./FeaturedGames";
import Footer from "./Footer.jsx";

export default function Frontpage() {
  return (
    <>
      <HeroCarousel />
      <NewswireSection />
      <FeaturedGames />
      <Footer />
    </>
  );
}
