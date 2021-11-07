import { useEffect, useState } from "react";
import useScroll from "../hooks/useScroll";
import animateScroll from "../lib/animateScroll";
import MenuButton from "../UI/MenuButton";
import Menu from "./Menu";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const [menuState, setMenuState] = useState(false);
  const [menuButton, setMenuButton] = useState(false);
  const [changeMenu, setChangeManue] = useState(false);
  const bottomPage =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const showButton = () => {
    window.innerWidth <= 900 ? setMenuButton(true) : setMenuButton(false);
  };

  const updateMenu = () => {
    window.scrollY < window.innerHeight * 0.25 && window.innerWidth >= 900
      ? setChangeManue(false)
      : setChangeManue(true);
  };

  const changeMenuState = () => {
    setMenuState(!menuState);
  };

  useScroll(updateMenu);

  const handleClick = (position) => {
    console.log(position);
    animateScroll({
      targetPosition: position,
      initialPosition: window.scrollY,
      duration: 3000,
    });
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);

    return () => window.removeEventListener("resize", showButton);
  }, []);

  return (
    <>
      <nav className={`${classes.nav} ${changeMenu ? classes.change : ""}`}>
        {menuButton ? (
          <MenuButton
            changeMenuState={changeMenuState}
            changeButton={menuState}
          />
        ) : (
          <ul className={classes.navBox}>
            <li
              className={`${classes.btn} ${changeMenu ? classes.change : ""}`}
              onClick={handleClick.bind(this, 0)}
            >
              HOME
            </li>
            <li
              className={`${classes.btn} ${changeMenu ? classes.change : ""}`}
              onClick={handleClick.bind(this, props.about - 100)}
            >
              ABOUT
            </li>
            <li
              className={`${classes.btn} ${changeMenu ? classes.change : ""}`}
              onClick={handleClick.bind(this, props.skills - 100)}
            >
              SKILLS
            </li>
            <li
              className={`${classes.btn} ${changeMenu ? classes.change : ""}`}
              onClick={handleClick.bind(this, props.projects - 100)}
            >
              PROJECTS
            </li>
            <li
              className={`${classes.btn} ${changeMenu ? classes.change : ""}`}
              onClick={handleClick.bind(this, bottomPage)}
            >
              CONTACT
            </li>
          </ul>
        )}
      </nav>
      <Menu
        menuState={menuState}
        changeMenuState={changeMenuState}
        about={props.about}
        skills={props.skills}
        projects={props.projects}
        bottomPage={bottomPage}
      />
    </>
  );
};

export default Navigation;
