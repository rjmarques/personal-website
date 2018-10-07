import { Layout } from "antd";
import * as React from "react";

import "./App.less";
import Home from "./home/Home";

const { Header, Content } = Layout;

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Layout>
          <Header />
          <Content>
            <Home />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
