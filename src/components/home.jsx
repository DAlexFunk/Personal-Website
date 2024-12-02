import alexImg from "../assets/alexHero.jpg";
import arrow from "../assets/curvedArrow.svg";
import calculatorImg from "../assets/calculator.png";
import shoppingCartImg from "../assets/shoppingCart.png";
import weatherImg from "../assets/weather.png";

const projects = [
  {
    repoLink: "https://github.com/DAlexFunk/Odin-Weather-App",
    externalLink: "https://dalexfunk.github.io/Odin-Weather-App/",
    img: weatherImg,
    title: "Weather App",
    desc: "Weather app project made with HTML/CSS and JavaScript. Makes calls to the Visual Crossing Weather API",
    color: "red",
  },
  {
    repoLink: "https://github.com/DAlexFunk/Odin-Shopping-Cart",
    externalLink: "https://dalexfunk-shopping-cart.netlify.app/",
    img: shoppingCartImg,
    title: "Shopping Cart",
    desc: "Fake shopping cart app made with ReactJS and makes calls to the Fake Store API",
    color: "green",
  },
  {
    repoLink: "https://github.com/DAlexFunk/Odin-Calculator",
    externalLink: "https://dalexfunk.github.io/Odin-Calculator/",
    img: calculatorImg,
    title: "Calculator App",
    desc: "Simple Calculator app made with JavaScript with an interface in HTML/CSS",
    color: "blue",
  },
];

export default function Home() {
  return (
    <main className="homePage">
      <section className="hero">
        <div className="heroText">
          <h1>Alex Funk, Developer</h1>
          <p>Creating Clean Code Since 2004 &#40;Not really&#41;</p>
        </div>
        <div className="image">
          <p className="name">That's Me</p>
          <img src={arrow} className="arrow" />
          <img src={alexImg} alt="Alex Funk" className="heroImg" />
        </div>
      </section>
      <section className="introP">
        <h2>This is Me</h2>
        <p>
          I have been a natural problem solver for my whole life. Some of my
          earliest memories are playing puzzle game with my Dad. I have also
          always been obsessed with computers. I remember watching coding videos
          &#40;shoutout to{" "}
          <a href="https://www.youtube.com/@TheCodingTrain">The Coding Train</a>
          &#41; on YouTube before I even knew what a language was.
        </p>
      </section>
      <section className="projects">
        <div className="projectsContainer">
          <h1>Projects Snapshot</h1>
          <div className="projects">
            {projects.map((project) => (
              <MiniProject project={project} key={projects.indexOf(project)} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function MiniProject({ project }) {
  return (
    <div className="project">
      <img src={project.img} className={project.color} />
      <div className="text">
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
      </div>
      <div className="buttons">
        <button
          className="repoButton"
          onClick={() => window.open(project.repoLink)}
        ></button>
        <button
          className="externalButton"
          onClick={() => window.open(project.externalLink)}
        ></button>
      </div>
    </div>
  );
}
