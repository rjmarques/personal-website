import { Button, Col, Row } from "antd";
import * as React from "react";

import "./Home.less";

class Home extends React.Component {
  public render() {
    return (
      <section className="Bio">
        <div className="content">
          <div className="Bio-content">
            <Row>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <img className="Bio-mugshot" src={require("./img/me.jpg")} />
              </Col>
              <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                <div className="Bio-description">
                  <h1>Ricardo Marques</h1>
                  <span className="Bio-sub-title">Full Stack Developer</span>
                  <p>
                    I specialize in Objected Oriented Development and Web
                    Development. I stand for quality and love spending time
                    optimizing every little piece of code.
                  </p>
                  <div className="Bio-buttons">
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
