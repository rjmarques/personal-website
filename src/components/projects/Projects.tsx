import { Card, Col, Icon, Row } from "antd";
import * as React from "react";

import SectionTitle from "../common/SectionTitle";

import "./Projects.less";

interface IProject {
  description: string;
  image: any;
  repoUrl: string;
  title: string;
  url: string;
}

class Projects extends React.Component {
  private projects: IProject[] = [
    {
      description: "An Angular webapp recipe for webprojects",
      image: require("./img/angular-typescript-recipe.png"),
      repoUrl: "https://github.com/rjmarques/angular2-typescript-recipe",
      title: "Angular 2 & Typescript Recipe",
      url: "https://angular2recipe.ricardomarq.com/"
    },
    {
      description: "A Fractal WebAssembly Viewer",
      image: require("./img/wasm-mandel.png"),
      repoUrl: "https://github.com/rjmarques/webasm-mandelbrot",
      title: "WebAssembly Mandelbrot",
      url: "https://wasmmandel.ricardomarq.com/"
    },
    {
      description: "My tiny solar system",
      image: require("./img/solar-system.png"),
      repoUrl: "https://github.com/rjmarques/SolarSystem",
      title: "WebGL Solar System",
      url: "https://solar.ricardomarq.com/"
    }
  ];

  public render() {
    return (
      <section className="Projects">
        <div className="content">
          <SectionTitle
            title="Projects"
            subTitle="Some projects I've done in my free time"
          />
          <div>{this.getProjects()}</div>
        </div>
      </section>
    );
  }

  private getProjects(): JSX.Element {
    return (
      <Row gutter={12}>
        {this.projects.map(proj => (
          <Col key={proj.title} xs={24} sm={24} md={8} lg={8} xl={8}>
            <Card
              hoverable={true}
              className="Projects-card"
              cover={<img alt="example" src={proj.image} />}
              actions={[
                <a key="demo_url" href={proj.url} target="_blank">
                  <Icon className="Projects-action-icon" type="play-circle" />
                </a>,
                <a key="repo_url" href={proj.repoUrl} target="_blank">
                  <Icon className="Projects-action-icon" type="github" />
                </a>
              ]}
            >
              <h4>{proj.title}</h4>
              <span className="Projects-card-subtitle">{proj.description}</span>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}

export default Projects;
