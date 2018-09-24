import { Button } from "antd";
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
        <Button type="primary">Primary</Button>
      </div>
    );
  }
}

export default App;
