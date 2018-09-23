import * as React from "react";
import "./App.scss";

export interface IAppProps {
  message: string;
}

class App extends React.Component<IAppProps, {}> {
  public render() {
    return (
      <div className="App">
        <h1 className="App-header">{this.props.message}</h1>
      </div>
    );
  }
}

export default App;
