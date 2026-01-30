import React, { useState } from "react";
import barca from "../../assets/barca.jpg"
import barca2 from "../../assets/barca2.jpg"
import barca3 from "../../assets/barca3.jpg"

const slides = [
  {
    id: 1,
    title: "NeuWorld",
    subtitle: "Premier truc à mettre",
    image: barca,
  },
  {
    id: 2,
    title: "NeuWorld",
    subtitle: "Deuxième truc à mettre",
    image: barca2,
  },
  {
    id: 3,
    title: "NeuWorld",
    subtitle: "Troisième truc à mettre",
    image: barca3,
  },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "black",
        color: "white",
      }}
    >
      {/* IMAGE */}
      <img
        src={slides[activeIndex].image}
        alt={slides[activeIndex].title}
        style={{
          width: "70%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* TEXTE À DROITE */}
      <div style={{ width: "30%", padding: "3rem" }}>
        <h4 style={{ color: "#aaa" }}>{slides[activeIndex].title}</h4>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", margin: "1rem 0" }}>
          {slides[activeIndex].subtitle}
        </h1>
        <button
          style={{
            padding: "0.8rem 2rem",
            fontWeight: "bold",
            border: "1px solid white",
            borderRadius: "6px",
            background: "transparent",
            color: "white",
            cursor: "pointer",
          }}
        >
          WATCH NOW
        </button>
      </div>

      {/* INDICATEURS */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          right: "3rem",
          display: "flex",
          gap: "0.7rem",
        }}
      >
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              background: activeIndex === index ? "white" : "gray",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
