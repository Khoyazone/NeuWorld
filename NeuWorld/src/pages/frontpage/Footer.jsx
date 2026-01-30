import React from "react";
import {
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaFacebook,
  FaTiktok,
  FaDiscord,
  FaTwitch,
  FaGlobe,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#000",
        color: "white",
        paddingTop: "4rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* --- SECTION NEWSLETTER --- */}
      <div
        style={{
          textAlign: "center",
          padding: "3rem 2rem",
          borderBottom: "1px solid #222",
          backgroundImage:
            "url('https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/footer_pattern_2x.png')",
          backgroundSize: "contain",
          backgroundRepeat: "repeat",
        }}
      >
        <div style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>★</div>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
          Subscribe to the NeuWorld Games Email List
        </h2>
        <p style={{ color: "#ccc", fontSize: "1rem", maxWidth: "600px", margin: "0 auto 2rem" }}>
          Sign up for our email newsletter to get info on game announcements and updates, details
          on special events and offers, and more from NeuWorld.
        </p>
        <button
          style={{
            backgroundColor: "transparent",
            border: "1px solid white",
            color: "white",
            borderRadius: "30px",
            padding: "0.8rem 2rem",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "white";
            e.currentTarget.style.color = "black";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "white";
          }}
        >
          Subscribe Now
        </button>
      </div>

      {/* --- FOOTER LINKS --- */}
      <div style={{ padding: "2rem 2rem 1rem", textAlign: "center" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem",
            marginBottom: "1.5rem",
            fontSize: "0.9rem",
            fontWeight: "bold",
          }}
        >
          <span>Contact</span>
          <span>Careers</span>
          <span>Community Resources</span>
          <span>Subscribe</span>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1.5rem",
            color: "#888",
            fontSize: "0.85rem",
            marginBottom: "1.5rem",
          }}
        >
          <span>Corporate</span>
          <span>Privacy</span>
          <span>Cookie Settings</span>
          <span>Cookie Policy</span>
          <span>Legal</span>
          <span>Do Not Sell or Share My Personal Information</span>
        </div>

        {/* --- Langue & Réseaux --- */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <FaGlobe />
            <span>English</span>
          </div>

          <div style={{ display: "flex", gap: "1.2rem", fontSize: "1.3rem" }}>
            <FaInstagram />
            <FaXTwitter />
            <FaYoutube />
            <FaFacebook />
            <FaTiktok />
            <FaDiscord />
            <FaTwitch />
          </div>
        </div>

        {/* --- Footer bas --- */}
        <div
          style={{
            color: "#666",
            fontSize: "0.8rem",
            marginTop: "2rem",
            borderTop: "1px solid #111",
            paddingTop: "1.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <p>Rockstar Games</p>
          <p>New York &nbsp;·&nbsp; London &nbsp;·&nbsp; Paris &nbsp;·&nbsp; Bogotá</p>
          <p style={{ fontFamily: "serif" }}>MCMXCVIII</p>
        </div>
      </div>
    </footer>
  );
}
