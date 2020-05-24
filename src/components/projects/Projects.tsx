import { Card, Col, Icon, Row } from "antd";
import React from "react";

import ContentSection from "../common/ContentSection";

import "./Projects.less";

interface IProject {
  description: string;
  image: any;
  repoUrl: string;
  title: string;
  url: string;
}

const projects: IProject[] = [
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
  },
  {
    description: "An Angular webapp recipe for web projects",
    image: require("./img/angular-typescript-recipe.png"),
    repoUrl: "https://github.com/rjmarques/angular2-typescript-recipe",
    title: "Angular & Typescript Recipe",
    url: "https://angular2recipe.ricardomarq.com/"
  }
];

const Projects = () => (
  <ContentSection
    title="Projects"
    subTitle="Some projects I've done in my free time"
    wrapperClass="Projects"
  >
    <Row gutter={12} className="Projects-card-row materialize">
      {projects.map(proj => (
        <Col key={proj.title} xs={24} sm={24} md={12} lg={8} xl={8}>
          <Card
            hoverable={true}
            className="Projects-card"
            cover={<img alt="example" src={proj.image} />}
            actions={[
              <a
                key="demo_url"
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="Projects-action-icon" type="play-circle" />
              </a>,
              <a
                key="repo_url"
                href={proj.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
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
  </ContentSection>
);

export default Projects;
