import alexImg from "../assets/alexHero.jpg"

export default function Home() {
  return (
    <main>
      <section className="hero">
        <h1>Alex Funk, Developer</h1>
        <p>Creating Clean Code Since 2004 &#40;Not really&#41;</p>
        <img src={alexImg} alt="" />
      </section>
    </main>
  );
}
