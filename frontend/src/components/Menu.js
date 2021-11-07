import { useEffect, useState } from "react";
import animateScroll from "../lib/animateScroll";
import classes from "./Menu.module.css";

const Menu = (props) => {
  const [firstShow, setFirstShow] = useState(true);
  const handleClick = (position) => {
    props.changeMenuState();
    animateScroll({
      targetPosition: position,
      initialPosition: window.scrollY,
      duration: 3000,
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setFirstShow(false);
    }, 1200);

    console.log(firstShow);
    return () => clearTimeout(timer);
  }, [firstShow]);

  return (
    <div
      className={`${
        props.menuState ? classes.expandedNav : classes.cancelExpand
      }`}
      style={{ opacity: `${firstShow ? "0" : "1"}` }}
    >
      <ul className={classes.menuBox}>
        <li className={classes.menuBtn} onClick={handleClick.bind(this, 0)}>
          HOME
        </li>
        <li
          className={classes.menuBtn}
          onClick={handleClick.bind(this, props.about - 100)}
        >
          ABOUT
        </li>
        <li
          className={classes.menuBtn}
          onClick={handleClick.bind(this, props.skills - 100)}
        >
          SKILLS
        </li>
        <li
          className={classes.menuBtn}
          onClick={handleClick.bind(this, props.projects - 100)}
        >
          PROJECTS
        </li>
        <li
          className={classes.menuBtn}
          onClick={handleClick.bind(this, props.bottomPage)}
        >
          CONTACT
        </li>
      </ul>
    </div>
  );
};

export default Menu;
