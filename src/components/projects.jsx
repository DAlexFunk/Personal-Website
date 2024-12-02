import { useContext, useEffect } from "react";
import { ActiveLinkContext } from "../App";

export default function Projects() {
  const { setActiveLink } = useContext(ActiveLinkContext);
  useEffect(() => {
    setActiveLink("projects");
  }, []);

  return <p>Projects</p>;
}
