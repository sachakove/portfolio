import learner from "../assets/icons/graduation-hat.svg";
import chess from "../assets/icons/chess.svg";
import curiosity from "../assets/icons/confusion.svg";
import team from "../assets/icons/team.svg";
import reactLogo from "../assets/icons/react.svg";
import mongooseLogo from "../assets/icons/mongoose1.svg";
import responsive from "../assets/responsive.png";
import responsiveMarketPlace from "../assets/responsive-marketPlace.png";
import responsivePortfolio from "../assets/responsive-Portfolio.png";

export const characters = [
  {
    icon: learner,
    title: "Learner",
    text:
      "Fast and Self learner. With the help of documentation, articles and online courses the sky is the limit.",
  },
  {
    icon: chess,
    title: "Strategic Thinker",
    text: "Thinking about several solutions to solve a problem.",
  },
  {
    icon: curiosity,
    title: "Curios",
    text: "Interested in how things work behind the scenes.",
  },
  {
    icon: team,
    title: "Team Player",
    text: "TEAM (Together Everyone Achieves More).",
  },
];

export const summary = ` I have serious passion for code and for development world. I love
working on creative and challenging projects that make the world a
more interesting place. I have a strong focus on quality and
efficiency, and am especially adept at communication and
collaboration.`;

export const technologies = [
  {
    icon:
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    name: "javascript",
    style: null,
  },
  {
    icon:
      "https://upload.wikimedia.org/wikipedia/commons/8/80/HTML5_logo_resized.svg",
    name: "html",
    style: null,
  },
  {
    icon:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    name: "CSS",
    style: { width: "50%" },
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
    name: "Git",
  },

  {
    icon: reactLogo,
    name: "react",
    style: { width: "60%" },
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/67/NodeJS.png",
    name: "NodeJs",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    name: "express",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg",
    name: "npm",
  },
  {
    icon: mongooseLogo,
    name: "mongoose",
  },
  {
    icon:
      "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
    name: "MongoDB",
  },
  {
    icon:
      "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    name: "GitHub",
    style: { width: "50%" },
  },
];

export const projects = [
  {
    name: "Market Place",
    description:
      "An online grocery store with a responsive and clean design. Using React Portals and custom hooks, mongoDB as database with Node js mongoose and express, which includes registration and user login, product list, search and more ...",
    technologies: [
      "React",
      "Redux-toolkit",
      "javaScript ES6",
      "CSS3",
      "HTML5",
      "Front-End development",
      "Responsive Website design",
      "MongoDB",
      "Mongoose",
      "NodeJS",
      "Express",
      "Back-End development",
    ],
    site: "https://market-place-4.herokuapp.com/",
    github: "https://github.com/sachakove/MarketPlace.git",
    image: responsiveMarketPlace,
  },
  {
    name: "Portfolio",
    description:
      "A personal image site for presenting projects, capabilities and for first impressions. Includes UI animations, custom hooks, emailing with NodeJS and responsive design that matches all screens",
    technologies: [
      "React",
      "javaScript ES6",
      "CSS3",
      "HTML5",
      "Front-End development",
      "Responsive Website design",
      "NodeJS",
      "Express",
    ],
    site: "https://david-sachakov.herokuapp.com",
    github: "https://github.com/sachakove/portfolio",
    image: responsivePortfolio,
  },
];
