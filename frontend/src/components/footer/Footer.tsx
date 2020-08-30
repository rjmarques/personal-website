import { LinkedinOutlined, GithubOutlined } from "@ant-design/icons";
import React from "react";

import "./Footer.less";

const Footer = () => (
  <footer className="footer">
    <div className="content">
      <div className="footer-info">
        <div className="footer-links">
          <a
            href="https://github.com/rjmarques"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubOutlined type="github" />
          </a>
          <a
            href="https://linkedin.com/in/ricardo-marques-48568b44"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinOutlined />
          </a>
        </div>
        <small className="footer-copy">
          &copy; Copyright {new Date().getFullYear()} Ricardo Marques
        </small>
      </div>
    </div>
  </footer>
);

export default Footer;
