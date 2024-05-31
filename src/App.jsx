import { useState, useEffect } from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Sidebar from "./component/Sidebar";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 970);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 970);
    if (window.innerWidth > 970) {
      setToggle(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClose = () => {
    setToggle(false);
  };

  return (
    <>
      <Header handleToggle={handleToggle} />
      <div className="main-containers">
        <Sidebar className={!isMobile || toggle ? "show" : ""} handleClose={handleClose} isMobile={isMobile} />
        <Hero />
      </div>
    </>
  );
}

export default App;
