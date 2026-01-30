import React from "react";
import barca from "../../assets/barca.jpg"
import barca2 from "../../assets/barca2.jpg"
import barca3 from "../../assets/barca3.jpg" 
// Tu peux remplacer ces images par tes fichiers locaux (importés depuis /assets)
const featured = {
  banner: barca,
  games: [
    {
      id: 1,
      title: "Grand Theft Auto V",
      image: barca2,
    },
    {
      id: 2,
      title: "Grand Theft Auto Online",
      image: barca3,
    },
    {
      id: 3,
      title: "Red Dead Redemption II",
      image: barca,
    },
    {
      id: 4,
      title: "Red Dead Redemption",
      image: barca2,
    },
  ],
};

export default function FeaturedGames() {
  return (
    <div style={{ backgroundColor: "black", color: "white", padding: "4rem 2rem" }}>
      {/* Section titre */}
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem" }}>Featured Games</h2>

      {/* Image bannière principale */}
      <div
        style={{
          width: "100%",
          borderRadius: "10px",
          overflow: "hidden",
          marginBottom: "2.5rem",
        }}
      >
        <img
          src={featured.banner}
          alt="Featured Banner"
          style={{
            width: "100%",
            height: "340px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </div>

      {/* Grille des jeux */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {featured.games.map((game) => (
          <div
            key={game.id}
            style={{
              backgroundColor: "#111",
              borderRadius: "10px",
              overflow: "hidden",
              textAlign: "center",
              cursor: "pointer",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 6px 25px rgba(255,255,255,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <img
              src={game.image}
              alt={game.title}
              style={{
                width: "100%",
                height: "260px",
                objectFit: "cover",
              }}
            />
            <div style={{ padding: "1rem" }}>
              <h3 style={{ fontSize: "1.1rem", marginTop: "0.5rem", color: "white" }}>
                {game.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
