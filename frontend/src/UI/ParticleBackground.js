import Particles from "react-particles-js";
import particlesConfig from "../lib/particle-config";
import classes from "./ParticleBackground.module.css";

const ParticleBackground = () => {
  return <Particles params={particlesConfig} className={classes.particles} />;
};

export default ParticleBackground;
