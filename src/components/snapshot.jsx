import { useContext, useEffect } from "react";
import { ActiveLinkContext } from "../App";

export default function Snapshot() {
  const { setActiveLink } = useContext(ActiveLinkContext);
  useEffect(() => {
    setActiveLink("snapshot");
  }, []);

  return <p>Snapshot</p>;
}
