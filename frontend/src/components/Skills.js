import { useState, useRef } from "react";
import classes from "./Skills.module.css";
import { technologies } from "../lib/characters";
import useScroll, { scrollAnimation } from "../hooks/useScroll";

const Skills = (props) => {
  const [show, setShow] = useState({ title: false, tech: false });
  const titleRef = useRef();
  const techRef = useRef();

  const tech = technologies.map((item) => (
    <span key={item.name} className={classes.item}>
      <img src={item.icon} alt={item.name} style={item.style} />
    </span>
  ));

  useScroll(() => {
    if (titleRef.current) {
      setShow((state) => ({
        ...state,
        title: scrollAnimation(titleRef.current),
      }));
    }
    if (techRef.current) {
      setShow((state) => ({
        ...state,
        tech: scrollAnimation(techRef.current),
      }));
    }
  });

  return (
    <div className={classes.container} id="skills">
      <span
        className={`${classes.title} ${show.title ? classes.change : ""}`}
        ref={titleRef}
      >
        <h1>Technologies</h1>
        <div />
      </span>

      <div
        className={`${classes.honeycombContainer} ${
          show.tech ? classes.change : ""
        }`}
        ref={techRef}
      >
        <div className={classes.honeycomb}>{tech}</div>
      </div>
    </div>
  );
};

export default Skills;
