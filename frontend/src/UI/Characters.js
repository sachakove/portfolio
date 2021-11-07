import classes from "./Characters.module.css";

const Characters = (props) => {
  return (
    <div className={classes.container}>
      <span className={classes.hexagon}>
        <img src={props.icon} className={classes.icon} alt={props.title} />
      </span>
      <span className={classes.textBox}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </span>
    </div>
  );
};

export default Characters;
