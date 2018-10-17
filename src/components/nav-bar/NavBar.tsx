import { Menu } from "antd";
import { ClickParam } from "antd/lib/menu";
import * as React from "react";

import "./NavBar.less";

interface INavItem {
  id: string;
  name: string;
}

interface IProps {
  items: INavItem[];
  selectedItemId: string;
  // TODO USER CLICKING FUNCTION
}

class NavBar extends React.Component<IProps, {}> {
  public render() {
    return (
      <div className="Nav">
        <div className="content">
          <nav className="nav-wrapper">
            <Menu
              className="Nav-menu"
              onClick={this.handleClick}
              mode="horizontal"
              selectedKeys={[this.props.selectedItemId]}
            >
              {this.props.items.map(item => (
                <Menu.Item className="Nav-item" key={item.id}>
                  {item.name}
                </Menu.Item>
              ))}
            </Menu>
          </nav>
        </div>
      </div>
    );
  }

  private handleClick = (e: ClickParam) => {
    alert(`click ${e.key}`);
  };
}

export default NavBar;
