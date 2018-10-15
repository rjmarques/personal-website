import * as React from "react";

import "./App.less";
import Bio from "./bio/Bio";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import Home from "./home/Home";
import NavBar from "./nav-bar/NavBar";
import Publications from "./publications/Publications";
import Skills from "./skills/Skills";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <Home />
        <div className="App-main-content">
          <Bio />
          <Skills />
          <Experience />
          <Publications />
          <Education />
        </div>
      </div>
    );
  }
}

export default App;
