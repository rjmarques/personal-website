import { Icon } from "antd";
import * as React from "react";

import "./Footer.less";
class Footer extends React.Component {
  public render() {
    return (
      <footer className="Footer">
        <div className="content">
          <div className="Footer-info">
            <div className="Footer-links">
              <a href="https://github.com/rjmarques" target="_blank">
                <Icon type="github" />
              </a>
              <a
                href="https://linkedin.com/in/ricardo-marques-48568b44"
                target="_blank"
              >
                <Icon type="linkedin" />
              </a>
            </div>
            <small className="Footer-copy">
              &copy; Copyright 2018 Ricardo Marques
            </small>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
