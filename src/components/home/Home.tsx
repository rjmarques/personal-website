import { Button, Col, message, Row } from "antd";
import "intersection-observer";
import React from "react";

import "./Home.less";

interface IProps {
  goToContact: () => void;
  cvDownload: (fileURL: string, saveAsName: string) => Promise<void>;
}

const CV_URL = "cv.pdf";
const SAVE_AS_NAME = "ricardomarquesCV.pdf";
const IMG_CLASS = "lazy";

const cvDownload = (props: IProps) => async () => {
  try {
    await props.cvDownload(CV_URL, SAVE_AS_NAME);
  } catch (error) {
    message.error(`Failed download CV: ${error}`, 5);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const lazyImage = document.querySelectorAll(`img.${IMG_CLASS}`)[0];

  const lazyImageObserver = new IntersectionObserver(entries => {
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
  <section className="Home">
    <div className="content">
      <div className="Home-content">
        <Row>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={8}
            xl={8}
            className="Home-hero-wrapper"
          >
            <img
              id="Home-hero-image"
              className={IMG_CLASS}
              alt="picture of me"
              src={require("./img/me_placeholder.png")}
              data-src={require("../../assets/img/me.jpg")}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={16} xl={16}>
            <div className="Home-description materialize">
              <h1>Ricardo Marques</h1>
              <span className="Home-sub-title">Full Stack Developer</span>
              <p>
                I specialize in Objected Oriented Development and Web
                Development. I stand for quality and love spending time
                optimizing every little piece of code.
              </p>
              <div className="Home-buttons">
                <Button
                  type="primary"
                  icon="mail"
                  size="large"
                  onClick={props.goToContact}
                >
                  Contact me
                </Button>
                <Button
                  icon="download"
                  size="large"
                  onClick={cvDownload(props)}
                >
                  Download CV
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  </section>
);

export default Home;
