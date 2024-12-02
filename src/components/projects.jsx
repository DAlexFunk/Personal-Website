import { useContext } from "react";
import { ActiveLinkContext } from "../App";

export default function Projects() {
  const { setActiveLink } = useContext(ActiveLinkContext);
  setActiveLink("projects");

  return <p>Projects</p>;
}
