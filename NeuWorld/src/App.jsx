import { Routes, Route } from "react-router-dom";
import HeroCarousel from "./pages/frontpage/HeroCarousel.jsx";
import NewswireSection from "./pages/frontpage/NewswireSection.jsx";
import FeaturedGames from "./pages/frontpage/FeaturedGames.jsx";
import Footer from "./pages/frontpage/Footer.jsx";
import Header from "./pages/frontpage/Header/Header.jsx";
import Odyssey from "./pages/frontpage/Odyssey/Odyssey.jsx";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={
          <>
            <HeroCarousel />
            <NewswireSection />
            <FeaturedGames />
            <Footer />
          </>
        }/>

        <Route path="/odyssey" element={<Odyssey />} />
      </Routes>
    </>
  );
}

export default App;
