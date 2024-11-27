import alexImg from "../assets/alexHero.jpg";
import arrow from "../assets/curvedArrow.svg";

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
    </main>
  );
}
