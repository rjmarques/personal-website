import { Icon } from "antd";
import React from "react";

import "./Footer.less";

const Footer = () => (
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
          &copy; Copyright {new Date().getFullYear()} Ricardo Marques
        </small>
      </div>
    </div>
  </footer>
);

export default Footer;
