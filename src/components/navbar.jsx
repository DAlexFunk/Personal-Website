import { useMeasure } from "@uidotdev/usehooks";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [selfRef, selfDimensions] = useMeasure();
  const [liRef, liDimensions] = useMeasure();

  let position = "0";
  switch (activeLink) {
    case "home":
      position = `calc(25% - ${0.5 * selfDimensions.width}px - ${0.25 * liDimensions.width}px)`;
      break;
    case "projects":
      position = `calc(50% - ${0.5 * selfDimensions.width}px)`;
      break;
    case "snapshot":
      position = `calc(75% - ${0.5 * selfDimensions.width}px + ${0.25 * liDimensions.width}px)`;
      break;
  }

  return (
    <nav>
      <ul>
        <li className="home" ref={liRef}>
          <Link
            to="/"
            className="homeLink"
            onClick={() => setActiveLink("home")}
          >
            Home
          </Link>
        </li>
        <li className="projects">
          <Link
            to="projects"
            className="projectLink"
            onClick={() => setActiveLink("projects")}
          >
            Projects
          </Link>
        </li>
        <li className="snapshot">
          <Link
            to="snapshot"
            className="snapshotLink"
            onClick={() => setActiveLink("snapshot")}
          >
            Snapshot of Me
          </Link>
        </li>
      </ul>
      <div
        className="highlight"
        style={{
          left: position,
          top: `calc(50% - ${0.5 * selfDimensions.height}px)`,
        }}
        ref={selfRef}
      ></div>
    </nav>
  );
}
