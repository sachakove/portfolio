import { Fragment, useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import useScroll from "./hooks/useScroll";

const App = () => {
  const [offsetY, setOffsetY] = useState();
  const [positions, setPositions] = useState({});

  const scrollParallax = () => setOffsetY(window.pageYOffset);
  const elementPosition = (element) => element.getBoundingClientRect().top;

  useScroll(scrollParallax);

  useEffect(() => {
    setPositions((state) => ({
      ...state,
      about: elementPosition(document.getElementById("about")),
      skills: elementPosition(document.getElementById("skills")),
      projects: elementPosition(document.getElementById("projects")),
    }));
  }, []);

  return (
    <Fragment>
      <Navigation
        about={positions.about}
        projects={positions.projects}
        skills={positions.skills}
      />
      <Header offsetY={offsetY} />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </Fragment>
  );
};

export default App;
