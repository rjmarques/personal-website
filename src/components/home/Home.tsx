"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import { Mail } from "@mui/icons-material";
import meImage from "../../assets/img/me.jpeg";
import "./Home.scss";

interface IProps {
  goToContact: () => void;
}

const Home = (props: IProps) => {

  return (
    <section className="home">
      <div className="content">
        <div className="home-content">
          <div className="home-hero-wrapper">
            <Image
              id="home-hero-image"
              alt="ric"
              src={meImage}
              priority
            />
          </div>
          <div className="home-description materialize">
            <h1>Ricardo Marques</h1>
            <span className="home-sub-title">Full Stack Developer</span>
            <p>
              I specialize in Objected Oriented Development and Web Development.
              I stand for quality and love spending time optimizing every little
              piece of code.
            </p>
            <div className="home-buttons">
              <Button
                variant="contained"
                startIcon={<Mail />}
                size="large"
                onClick={props.goToContact}
              >
                Contact me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
