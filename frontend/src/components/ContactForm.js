import classes from "./ContactForm.module.css";
import { useState } from "react";
import Loader from "../UI/Loader";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSent(true);
    setLoading(true);
    try {
      await fetch("/send_mail", {
        method: "POST",
        body: JSON.stringify({ name: name, email: email, message: message }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={classes.contactBox}>
      <div className={classes.contact}>
        <div className={classes.title}>
          <h1>Contact</h1>
          <div />
        </div>
        {loading && (
          <span className={classes.greetBox}>
            <Loader />
          </span>
        )}
        {sent && !loading && (
          <span className={classes.greetBox}>
            <h1>Thank you !</h1>
          </span>
        )}
        {!sent && (
          <form className={classes.form} onSubmit={handleSubmit}>
            <span className={classes.inputBox}>
              <input
                type="text"
                placeholder={"Name"}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </span>
            <span className={classes.inputBox}>
              <input
                type="email"
                placeholder={"Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </span>
            <div className={classes.messageBox}>
              <textarea
                type="text"
                placeholder={"Your Message"}
                className={classes.message}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button className={classes.formBtn} type="submit">
              Send
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
