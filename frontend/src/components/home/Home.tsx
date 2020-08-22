import { Button } from "antd";
import { MailOutlined } from "@ant-design/icons";
import React from "react";

import "./Home.less";

interface IProps {
  goToContact: () => void;
}

const IMG_CLASS = "lazy";

document.addEventListener("DOMContentLoaded", () => {
  const lazyImage = document.querySelectorAll(`img.${IMG_CLASS}`)[0];

  const lazyImageObserver = new IntersectionObserver((entries) => {
    if (entries.length > 1) {
      throw new Error("There can be only one!");
    }

    const entry = entries[0];
    if (entry.isIntersecting) {
      const img = entry.target as HTMLImageElement;
      img.src = img.dataset.src || "";
      img.srcset = img.dataset.srcset || "";
      img.classList.remove(IMG_CLASS);
      lazyImageObserver.unobserve(img);
    }
  });

  lazyImageObserver.observe(lazyImage);
});

const Home = (props: IProps) => (
  <section className="home">
    <div className="content">
      <div className="home-content">
        <div className="home-hero-wrapper">
          <img
            id="home-hero-image"
            className={IMG_CLASS}
            alt="ric"
            src={require("./img/me_placeholder.png")}
            data-src={require("../../assets/img/me.jpg")}
          />
        </div>
        <div className="home-description materialize">
          <h1>Ricardo Marques</h1>
          <span className="home-sub-title">Full Stack Developer</span>
          <p>
            I specialize in Objected Oriented Development and Web Development. I
            stand for quality and love spending time optimizing every little
            piece of code.
          </p>
          <div className="home-buttons">
            <Button
              type="primary"
              icon={<MailOutlined />}
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

export default Home;
