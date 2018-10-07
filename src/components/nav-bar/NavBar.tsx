import { Menu } from "antd";
import { ClickParam } from "antd/lib/menu";
import * as React from "react";

import "./NavBar.less";

class NavBar extends React.Component {
  public render() {
    return (
      <div className="content">
        <nav className="nav-wrapper">
          <Menu
            onClick={this.handleClick}
            defaultOpenKeys={["sub1"]}
            selectedKeys={["1"]}
            mode="horizontal"
          >
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Bio</Menu.Item>
            <Menu.Item key="3">Career</Menu.Item>
            <Menu.Item key="4">Education</Menu.Item>
          </Menu>
        </nav>
      </div>
    );
  }

  private handleClick = (e: ClickParam) => {
    alert(`click ${e.key}`);
  };
}

export default NavBar;
