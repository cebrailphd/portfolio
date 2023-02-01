import { Route, Routes } from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/Home";
import About from "./components/About";
import Research from "./components/Research";
import Photography from "./components/Photography";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Portfolio() {
  return (
    <Routes>
      <Route exact path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/research" element={<Research />} />
        <Route path="/photography" element={<Photography />} />
      </Route>
    </Routes>
  );
}

export default Portfolio;
