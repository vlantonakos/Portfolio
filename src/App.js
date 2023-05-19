import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Home from "./components/Home/Home";
import Main from './components/Main/Main'
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import "./style.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About/About";

function App() {

  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
    <Router>
      <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
    </Router>
    </>
  );
}

export default App;
