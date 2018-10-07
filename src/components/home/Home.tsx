import { Button, Col, Row } from "antd";
import * as React from "react";

import "./Home.less";

class Home extends React.Component {
  public render() {
    return (
      <section className="Home">
        <div className="content">
          <div className="Home-content">
            <Row>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <img className="Home-mugshot" src={require("./img/me.jpg")} />
              </Col>
              <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                <div className="Home-description">
                  <h1>Ricardo Marques</h1>
                  <span className="Home-sub-title">Full Stack Developer</span>
                  <p>
                    I specialize in Objected Oriented Development and Web
                    Development. I stand for quality and love spending time
                    optimizing every little piece of code.
                  </p>
                  <div className="Home-buttons">
                    <Button type="primary" size="large">
                      Contact me
                    </Button>
                    <Button icon="download" size="large">
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
  }
}

export default Home;
