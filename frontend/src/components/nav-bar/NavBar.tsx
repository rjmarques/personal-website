import { Dropdown, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import React, { Component } from "react";

import "./NavBar.less";

interface INavItem {
  id: string;
  name: string;
}

interface IProps {
  items: INavItem[];
  selectedItemId: string;
  userSelectedView: (viewId: string) => void;
}

interface IState {
  popoverVisible: boolean;
}

class NavBar extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { popoverVisible: false };
  }

  public componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  public componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  public render() {
    return (
      <div className="nav">
        <div className="content">
          <nav className="nav-wrapper">
            {this.getMenu("horizontal")}
            <Dropdown
              className="nav-dropdown"
              overlay={this.getMenu("vertical")}
              placement="bottomRight"
              visible={this.state.popoverVisible}
            >
              <MenuOutlined
                className="nav-hamburger"
                onClick={this.toggleMenu}
              />
            </Dropdown>
          </nav>
        </div>
      </div>
    );
  }

  private getMenu(mode: "vertical" | "horizontal"): JSX.Element {
    const className = `nav-menu  ${mode}`;
    return (
      <Menu
        className={className}
        onClick={this.onClick}
        mode={mode}
        selectedKeys={[this.props.selectedItemId]}
      >
        {this.props.items.map((item) => (
          <Menu.Item className="nav-item" key={item.id}>
            {item.name}
          </Menu.Item>
        ))}
      </Menu>
    );
  }

  private handleScroll = () => {
    this.handleMenuVisibility(false);
  };

  private toggleMenu = () => {
    this.handleMenuVisibility(!this.state.popoverVisible);
  };

  private onClick = (e: any) => {
    const id = e.key;
    this.props.userSelectedView(id);
    this.handleMenuVisibility(false);
  };

  private handleMenuVisibility(popoverVisible: boolean) {
    this.setState({ popoverVisible });
  }
}

export default NavBar;
