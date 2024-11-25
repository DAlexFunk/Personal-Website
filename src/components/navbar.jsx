import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="homeLink">
            Home
          </Link>
        </li>
        <li>
          <Link to="projects" className="projectsLink">
            Projects
          </Link>
        </li>
        <li>
          <Link to="snapshot" className="snapshowLink">
            Snapshot of Me
          </Link>
        </li>
      </ul>
    </nav>
  );
}
