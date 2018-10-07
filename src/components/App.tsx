import * as React from "react";

import "./App.less";
import Home from "./home/Home";
import NavBar from "./nav-bar/NavBar";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <div className="App-main-content">
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
