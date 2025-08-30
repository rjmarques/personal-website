"use client";

import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "./Footer.scss";

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="content">
      <div className="footer-info">
        <div className="footer-links">
           <a
             href="https://github.com/rjmarques"
             target="_blank"
             rel="noopener noreferrer"
             aria-label="GitHub Profile"
           >
             <GitHubIcon />
           </a>
           <a
             href="https://linkedin.com/in/ricardo-marques-48568b44"
             target="_blank"
             rel="noopener noreferrer"
             aria-label="LinkedIn Profile"
           >
             <LinkedInIcon />
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
