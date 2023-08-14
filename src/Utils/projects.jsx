import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import portfolio from '../assets/protfolio.png';
import xogame from '../assets/xogame.png';
import libman from '../assets/libman.png';
export const stacks = [
  {
    icon: <DiJavascript />,
    name: "Javascript",
  },
  {
    icon: <FaReact />,
    name: "React",
  },
];
export const projectss = [
  {
    name: "My Profolio",
    pic: portfolio,
    brief:
      "My Personal Profolio project built with React & Redux toolkit.",
    tech: "react",
    link: "https://github.com/pypro001/my-portfolio",
  },
  {
    name: "Online Multiplayer X'O Game",
    pic: xogame,
    brief:
      "This is a Online Multiplayer web game.Send your game code to your friend and Play. Built with React & Firebase",
    tech: "JavaScript",
    link: "https://github.com/pypro001/tictac_reactapp",
  },
  {
    name: "Library Management",
    pic: libman,
    brief:
      "This is my MERN stack Project.This project helps to manage Book Library.",
    tech: "javascript",
    link: "https://github.com/pypro001/library-management",
  }
];
