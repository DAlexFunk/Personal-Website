import { useContext } from "react";
import { ActiveLinkContext } from "../App";

export default function Snapshot() {
  const { setActiveLink } = useContext(ActiveLinkContext);
  setActiveLink("snapshot");

  return <p>Snapshot</p>;
}
