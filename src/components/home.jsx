import alexImg from "../assets/alexHero.jpg";
import arrow from "../assets/curvedArrow.svg"

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
    </main>
  );
}
