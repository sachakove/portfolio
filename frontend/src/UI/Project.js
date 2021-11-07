import { useRef, useState } from "react";
import useScroll, { scrollAnimation } from "../hooks/useScroll";
import classes from "./Project.module.css";

const Project = (props) => {
  const [show, setShow] = useState(false);
  const projectRef = useRef();

  useScroll(() => {
    if (projectRef.current) {
      setShow(scrollAnimation(projectRef.current));
    }
  });

  return (
    <div className={classes.project}>
      <div
        className={`${classes.projectBox} ${show ? classes.change : ""}`}
        ref={projectRef}
      >
        <img src={props.image} alt={props.name} className={classes.left} />

        <div className={classes.right}>
          <span className={classes.projectTitle}>{props.name}</span>
          <span className={classes.projectDesc}>{props.desc}</span>
          <div className={classes.projectTech}>
            {props.tech.map((tech) => (
              <span>{tech}</span>
            ))}
          </div>
          <span className={classes.buttonsBox}>
            <a
              href={props.site}
              className={classes.btn}
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
            <a
              href={props.github}
              className={classes.btn}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Project;
