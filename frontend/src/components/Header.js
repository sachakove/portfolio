import classes from "./Header.module.css";
import { ReactComponent as Face } from "../assets/yep.svg";
import ParticleBackground from "../UI/ParticleBackground";

const Header = (props) => {
  return (
    <div className={classes.container}>
      <Face className={classes.face} />

      <header
        className={classes.header}
        style={{ transform: `translateY(${props.offsetY * 0.3}px)` }}
      >
        <div className={classes.contentLeft}>
          <div className={classes.greeting}>
            <hr />
            Hello, I'm full-stack web developer. Welocome to my portfolio!
          </div>
          <div className={classes.nameBox}>
            <div className={classes.firstName}>David</div>
            <div className={classes.lastName}>Sachakov</div>
          </div>
        </div>
        {/* <div className={classes.face}> */}
        {/* </div> */}
      </header>
      <ParticleBackground />
    </div>
  );
};

export default Header;
