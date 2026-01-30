import React from "react";
import barca from "../../assets/barca.jpg"
import barca2 from "../../assets/barca2.jpg"
import barca3 from "../../assets/barca3.jpg"

const newsItems = [
  {
    id: 1,
    category: "GTA Online",
    date: "October 2, 2025",
    title: "Celebrate Spooky Season as Halloween Haunts Los Santos",
    image: barca,
  },
  {
    id: 2,
    category: "CircoLoco Records",
    date: "October 10, 2025",
    title: "CircoLoco Records Presents The Boy / Moon EP from Skream and Krystal Klear",
    image: barca2,
  },
  {
    id: 3,
    category: "GTA Online",
    date: "October 9, 2025",
    title: "Claim a Declasse Weaponized Tampa and Other Treats with GTA+",
    image: barca3,
  },
  {
    id: 4,
    category: "GTA Online",
    date: "September 29, 2025",
    title: "Halloween Haunts Continue Across Los Santos",
    image: barca2,
  },
  {
    id: 5,
    category: "CircoLoco Records",
    date: "September 20, 2025",
    title: "New Tracks Drop from CircoLoco Records This Month",
    image: barca2,
  },
  {
    id: 6,
    category: "Rockstar Games",
    date: "September 15, 2025",
    title: "A Look Back at the Best Fan Creations of the Year",
    image: barca3,
  },
];

export default function NewswireSection() {
  return (
    <div style={{ backgroundColor: "black", color: "white", padding: "4rem 2rem" }}>
      {/* Titre principal */}
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem" }}>Newswire</h2>

      {/* Grille d’articles */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "1.5rem",
          justifyItems: "center",
        }}
      >
        {newsItems.map((item) => (
          <div
            key={item.id}
            style={{
              backgroundColor: "#111",
              borderRadius: "10px",
              overflow: "hidden",
              cursor: "pointer",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              width: "100%",
              maxWidth: "400px",
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
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            {/* Texte */}
            <div style={{ padding: "1rem" }}>
              <p style={{ color: "#ccc", fontSize: "0.8rem", marginBottom: "0.3rem" }}>
                <strong>{item.category}</strong> &nbsp; {item.date}
              </p>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  lineHeight: "1.4",
                  color: "white",
                }}
              >
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
