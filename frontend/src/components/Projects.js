import classes from "./Projects.module.css";
import { projects as projectsArray } from "../lib/characters";
import Project from "../UI/Project";
import { useRef, useState } from "react";
import useScroll, { scrollAnimation } from "../hooks/useScroll";

const Projects = (props) => {
  const [show, setShow] = useState(false);
  const titleRef = useRef();

  const projects = projectsArray.map((project) => (
    <Project
      key={project.name}
      name={project.name}
      image={project.image}
      desc={project.description}
      tech={project.technologies}
      site={project.site}
      github={project.github}
    />
  ));

  useScroll(() => {
    if (titleRef.current) {
      setShow(scrollAnimation(titleRef.current));
    }
  });

  return (
    <div className={classes.container} id="projects">
      <span className={classes.title} ref={titleRef}>
        <h1 className={`${show ? classes.change : ""}`}>Projects</h1>
        <div />
      </span>

      <div className={classes.projectsContainer}>{projects}</div>
    </div>
  );
};

export default Projects;
