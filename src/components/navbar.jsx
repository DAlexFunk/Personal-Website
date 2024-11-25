import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <nav>
      <ul>
        <li className={activeLink === "home" ? " active" : ""}>
          <Link
            to="/"
            className="homeLink"
            onClick={() => setActiveLink("home")}
          >
            Home
          </Link>
        </li>
        <li className={activeLink === "projects" ? " active" : ""}>
          <Link
            to="projects"
            className="projectLink"
            onClick={() => setActiveLink("projects")}
          >
            Projects
          </Link>
        </li>
        <li className={activeLink === "snapshot" ? " active" : ""}>
          <Link
            to="snapshot"
            className="snapshotLink"
            onClick={() => setActiveLink("snapshot")}
          >
            Snapshot of Me
          </Link>
        </li>
      </ul>
    </nav>
  );
}
