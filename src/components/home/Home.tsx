import { Button, Col, message, Row } from "antd";
import * as React from "react";

import "./Home.less";

interface IProps {
  goToContact: () => void;
  cvDownload: (fileURL: string, saveAsName: string) => Promise<void>;
}

const CV_URL = "cv.pdf";
const SAVE_AS_NAME = "ricardomarquesCV.pdf";

class Home extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
    this.cvDownload = this.cvDownload.bind(this);
  }

  public render() {
    return (
      <section className="Home">
        <div className="content">
          <div className="Home-content">
            <Row>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                <img
                  className="Home-mugshot"
                  alt="picture of me"
                  src={require("../../assets/img/me.jpg")}
                />
              </Col>
              <Col xs={24} sm={24} md={24} lg={16} xl={16}>
                <div className="Home-description">
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
                      onClick={this.props.goToContact}
                    >
                      Contact me
                    </Button>
                    <Button
                      icon="download"
                      size="large"
                      onClick={this.cvDownload}
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
  }

  private async cvDownload() {
    try {
      await this.props.cvDownload(CV_URL, SAVE_AS_NAME);
    } catch (error) {
      message.error(`Failed download CV: ${error}`, 5);
    }
  }
}

export default Home;
