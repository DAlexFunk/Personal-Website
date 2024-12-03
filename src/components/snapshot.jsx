import { useContext, useEffect } from "react";
import { ActiveLinkContext } from "../App";
import redRisingImg from "../assets/redRising.jpg";
import codenamesImg from "../assets/codenames.webp";

export default function Snapshot() {
  const { setActiveLink } = useContext(ActiveLinkContext);
  useEffect(() => {
    setActiveLink("snapshot");
  }, []);

  return (
    <main className="snapshot">
      <h1>Snapshot of Me</h1>
      <p>
        This is a look at my life outside of programming and Computer Science
      </p>
      <div className="snapshots">
        <div className="snapshot" id="books">
          <h2>Books</h2>
          <div className="content">
            <p>
              I love reading in my free time. I mostly read science fiction,
              however, I am also open to and usually love books of all genres.
              My favorite series is the Red Rising series by Pierce Brown which
              follows Darrow as he attempts to take down the dreaded Society.
            </p>
            <img src={redRisingImg} alt="Red Rising by Pierce Brown" />
          </div>
        </div>
        <div className="snapshot" id="music">
          <h2>Music</h2>
          <div className="content">
            <p>
              I play music. Specifically percusion. Like drums and stuff.
              However, I do not usually play the drums but rather the marimba
              mostly. I love playing music. It is my favorite way to express
              myself and just enjoy life.
            </p>
            <div className="video">
              <iframe
                src="https://www.youtube.com/embed/RPN1uB4Va3I?si=VpE3mEdiYk8464My"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
                referrerpolicy="strict-origin-when-cross-origin"
              ></iframe>
              <p className="subtitle">
                Watch a video of my playing the Marimba!
              </p>
            </div>
          </div>
        </div>
        <div className="snapshot" id="videoGames">
          <h2>Video Games</h2>
          <div className="content">
            <p>
              I think the best way to relax after a long day is just sitting
              down and playing your favorite game. I usually enjoy most types of
              games, including games that make me as frustrated as possible. One
              of the ways I enjoy playing games is speedrunning (playing the
              game as fast as possible) the game. Over my life I have achieved
              multiple world records in games (most of which have since been
              beaten).
            </p>
            <div className="video">
              <iframe
                src="https://www.youtube.com/embed/5J_IKUKxAoc?si=9etBFdj-AIY8PtQm"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                referrerpolicy="strict-origin-when-cross-origin"
              ></iframe>
              <p className="subtitle">
                Watch my latest speedrun (it is a world record!)
              </p>
            </div>
          </div>
        </div>
        <div className="snapshot" id="boardGames">
          <h2>Board Games</h2>
          <div className="content">
            <p>
              Board games are something I have been playing for my entire life.
              Whether it is Monopoly or Risk with my Dad or Betrayal at House on
              the Hill at school with my friends. I am apart of the University
              of Cincinnati Board Game Club where I have met some great friends.
            </p>
            <div className="image">
              <img src={codenamesImg} alt="Codenames boxart" />
              <p className="subtitle">Codenames, my favorite board game</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
