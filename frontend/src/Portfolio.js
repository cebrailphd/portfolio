import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Research from "./components/Research";
import Photography from "./components/Photography";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Portfolio() {
  return (
    <>
      <Nav />
      <Header />
      <main className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-6">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/photography" element={<Photography />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default Portfolio;
