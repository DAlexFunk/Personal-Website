import { Outlet } from "react-router-dom";
import { useState, createContext, useContext } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const ActiveLinkContext = createContext(null);

export function App() {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <ActiveLinkContext.Provider value={{ activeLink, setActiveLink }}>
      <Navbar />
      <Outlet />
      <Footer />
    </ActiveLinkContext.Provider>
  );
}
