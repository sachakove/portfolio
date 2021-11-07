import classes from "./About.module.css";
import pic from "../assets/About.jpg";
import { useRef, useState } from "react";
import useScroll, { scrollAnimationTop } from "../hooks/useScroll";
import { characters, summary as aboutSummary } from "../lib/characters";
import Characters from "../UI/Characters";

const About = () => {
  const [show, setShow] = useState({
    title: false,
    char: false,
    summary: false,
  });

  const titleRef = useRef(null),
    charRef = useRef(null),
    sumRef = useRef(null);

  useScroll(() => {
    if (titleRef.current) {
      setShow((state) => ({
        ...state,
        title: scrollAnimationTop(titleRef.current),
      }));
    }
    //
    if (charRef.current) {
      setShow((state) => ({
        ...state,
        char: scrollAnimationTop(charRef.current),
      }));
    }
    //
    if (sumRef.current) {
      setShow((state) => ({
        ...state,
        summary: scrollAnimationTop(sumRef.current),
      }));
    }
    //
  });

  return (
    <div className={classes.container} id="about">
      <div className={classes.top}>
        <span
          className={`${classes.title} ${show.title ? classes.change : ""}`}
        >
          <h1 ref={titleRef}>ABOUT</h1>
          <div />
        </span>

        <div
          className={`${classes.charBox} ${show.char ? classes.change : ""}`}
          ref={charRef}
        >
          {characters.map((c) => (
            <Characters
              key={c.title}
              icon={c.icon}
              title={c.title}
              text={c.text}
            />
          ))}
        </div>
      </div>

      <div
        className={`${classes.bottom} ${show.summary ? classes.change : ""}`}
        ref={sumRef}
      >
        <img src={pic} alt="about" />
        <div className={classes.summary}>
          <span>{aboutSummary}</span>
        </div>
      </div>
    </div>
  );
};

export default About;
