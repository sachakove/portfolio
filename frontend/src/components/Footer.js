import ContactForm from "./ContactForm";
import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={classes.container}>
      <ContactForm />

      <div className={`${classes.wave} ${classes.wave1}`}></div>
      <div className={`${classes.wave} ${classes.wave2}`}></div>
      <div className={`${classes.wave} ${classes.wave3}`}></div>
      <div className={`${classes.wave} ${classes.wave4}`}></div>
    </div>
  );
};

export default Footer;
