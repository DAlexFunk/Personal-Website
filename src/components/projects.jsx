import { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { ActiveLinkContext } from "../App";
import weatherImg from "../assets/weather.png";
import shoppingImg from "../assets/shoppingCart.png";
import calculatorImg from "../assets/calculator.png";
import personalImg from "../assets/personalWebsite.png";
import knightImg from "../assets/knightsTravails.png";
import libraryImg from "../assets/library.png";
import messageBoardImg from "../assets/messageBoard.png";
import memoryCardImg from "../assets/memoryCard.png";
import battleshipImg from "../assets/battleship.png";
import todoListImg from "../assets/todolist.png";
import restaurantImg from "../assets/restaurant.png";
import tictactoeImg from "../assets/tictactoe.png";

const projects = [
  {
    repoLink: "https://github.com/DAlexFunk/Odin-Weather-App",
    externalLink: "https://dalexfunk.github.io/Odin-Weather-App/",
    title: "Weather App",
    desc: "Weather app project made with HTML/CSS and JavaScript. The app makes calls to the Visual Crossing Weather API. Project menat to practice using APIs and asynchronous code.",
    img: weatherImg,
  },
  {
    repoLink: "https://github.com/DAlexFunk/Odin-Shopping-Cart",
    externalLink: "https://dalexfunk-shopping-cart.netlify.app/",
    title: "Shopping Cart",
    desc: "Fake shopping cart app made with ReactJS and makes calls to the Fake Store API. This project was made to practice using React to create a website. This includes using the Router to create multi page apps.",
    img: shoppingImg,
  },
  {
    repoLink: "https://github.com/DAlexFunk/Odin-Calculator",
    externalLink: "https://dalexfunk.github.io/Odin-Calculator/",
    title: "Calculator",
    desc: "Simple Calculator app made with JavaScript with an interface in HTML/CSS.",
    img: calculatorImg,
  },
  {
    repoLink: "https://github.com/DAlexFunk/Personal-Website",
    externalLink: "/",
    title: "Personal Website",
    desc: "The very website you are looking at right now. This site is build in ReactJS and is meant to show off myself and my skills to the world.",
    img: personalImg,
  },
  {
    repoLink: "https://github.com/DAlexFunk/Knights-Travails",
    externalLink:
      "https://github.com/DAlexFunk/Knights-Travails/blob/main/knightsTravails.mjs",
    title: "Knights Travails",
    desc: "A script written in JavaScript to find the shortest path between two different squares on a chessboard by a knight's movement. The script represnents the board as a graph through an adjency list. The script then uses breadth0first search to find the shortest path.",
    img: knightImg,
  },
  {
    repoLink: "https://github.com/DAlexFunk/Odin-Library",
    externalLink: "https://dalexfunk.github.io/Odin-Library/",
    title: "Library",
    desc: "A library app to store and view one's library. Using the form to the right, one can add a book and see it populate the library to the right. This project uses forms and form validation via JavaScript.",
    img: libraryImg,
  },
  {
    repoLink: "https://github.com/DAlexFunk/Odin-Mini-Message-Board",
    externalLink:
      "https://weird-dorree-alex-funk-projects-a0c238cc.koyeb.app/messages",
    title: "Message Board",
    desc: "A mini message board where users can see messages and add new messages. This project uses express to run a server where all of the code is stored. The messages are stored in a PotgreSQL database.",
    img: messageBoardImg,
  },
  {
    repoLink: "https://github.com/DAlexFunk/Odin-Memory-Card",
    externalLink: "https://dalexfunk-memory-card.netlify.app/",
    title: "Memory Card",
    desc: "A memory card game where the user has to click on the images without clicking on the same image twice. This project uses ReactJS to create the user functionality.",
    img: memoryCardImg,
  },
  {
    repoLink: "https://github.com/DAlexFunk/Odin-Battleship",
    externalLink: "https://dalexfunk.github.io/Odin-Battleship/",
    title: "Battleship",
    desc: "An implementation of the game Battlship where the user gets a board and plays against the computer. The user can click on the opponent's board to shoot attacks. The user then gets shot at randomly by the computer.",
    img: battleshipImg,
  },
  {
    repoLink: "https://github.com/DAlexFunk/Odin-Todo-List",
    externalLink: "https://dalexfunk.github.io/Odin-Todo-List/",
    title: "Todo List",
    desc: "A simple todo list site where the user can add todos to todo lists. There can be multiple projects made, each with their own todo lists. This project makes use of classes to store both the projects and the todo items.",
    img: todoListImg,
  },
  {
    repoLink: "https://github.com/DAlexFunk/Odin-Restaurant",
    externalLink: "https://dalexfunk.github.io/Odin-Restaurant/",
    title: "Restaurant Page",
    desc: "A restaurant page made for a fake restaurant based in Valhalla from Norse Mythology. This project features three pages with the routing done entirely in JavaScript. This project is meant to practice using JavaScript and CSS for pages.",
    img: restaurantImg,
  },
  {
    repoLink: "https://github.com/DAlexFunk/Odin-Tic-Tac-Toe",
    externalLink: "https://dalexfunk.github.io/Odin-Tic-Tac-Toe/",
    title: "Tic-Tac-Toe",
    desc: "An implementation of the game Tic-Tac-Toe in a website. This site uses JavaScript of the implementation of the game. HTML/CSS is used for the user interface of the site. The users can insert their own names into the site to make it more personalized.",
    img: tictactoeImg,
  },
];

const colors = ["red", "green", "blue"];

export default function Projects() {
  const { setActiveLink } = useContext(ActiveLinkContext);
  useEffect(() => {
    setActiveLink("projects");
  }, []);

  return (
    <main className="projects">
      <div className="title">
        <h1>Projects</h1>
        <p>A more in-depth look at some of my projects</p>
      </div>
      <div className="projects">
        {projects.map((project) => (
          <Project project={project} key={projects.indexOf(project)} />
        ))}
      </div>
    </main>
  );
}

function Project({ project }) {
  const index = projects.indexOf(project);
  return (
    <div className="project">
      <img src={project.img} className={colors[index % 3]} />
      <div className="text">
        <h2>{project.title}</h2>
        <p>{project.desc}</p>
      </div>
      <div className="buttons">
        <Button type="github" href={project.repoLink} />
        <Button type="externalLink" href={project.externalLink} />
      </div>
    </div>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    img: PropTypes.any,
    title: PropTypes.string,
    desc: PropTypes.string,
    repoLink: PropTypes.string,
    externalLink: PropTypes.string,
  }),
};

function Button({ type, href }) {
  return <button className={type} onClick={() => window.open(href)}></button>;
}

Button.propTypes = {
  type: PropTypes.string,
  href: PropTypes.string,
};
