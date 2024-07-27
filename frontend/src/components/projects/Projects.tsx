import { Card } from "antd";
import { PlayCircleOutlined, GithubOutlined } from "@ant-design/icons";
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
    description: "A set of air quality sensors connected to an ESP32 MCU",
    image: require("./img/esp32.png"),
    repoUrl: "https://github.com/rjmarques/esp32-air-quality-sensor",
    title: "Esp32 Air Quality",
    url: "https://github.com/rjmarques/esp32-air-quality-sensor",
  },
  {
    description: "My own Terraform provisioned ECS cluster",
    image: require("./img/ecs.png"),
    repoUrl: "https://github.com/rjmarques/my-ecs-cluster",
    title: "My ECS Cluster",
    url: "https://github.com/rjmarques/my-ecs-cluster",
  },
  {
    description: "A twitter joke scraper running on ECS",
    image: require("./img/something-of-the-day.png"),
    repoUrl: "https://github.com/rjmarques/something-of-the-day",
    title: "Something of the day",
    url: "https://something.ricardomarques.dev/",
  },
  {
    description: "A Fractal WebAssembly Viewer",
    image: require("./img/wasm-mandel.png"),
    repoUrl: "https://github.com/rjmarques/webasm-mandelbrot",
    title: "WebAssembly Mandelbrot",
    url: "https://wasmmandel.ricardomarq.com/",
  },
  {
    description: "My Solar System",
    image: require("./img/solar-system.png"),
    repoUrl: "https://github.com/rjmarques/SolarSystem",
    title: "WebGL Solar System",
    url: "https://solar.ricardomarq.com/",
  },
];

const Projects = () => (
  <ContentSection
    title="Projects"
    subTitle="Some projects I've done in my free time"
    wrapperClass="projects"
  >
    <div className="projects-card-row materialize">
      {projects.map((proj) => (
        <Card
          key={proj.title}
          hoverable={true}
          className="projects-card"
          cover={<img alt="example" src={proj.image} />}
          actions={[
            <a
              key="demo_url"
              href={proj.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PlayCircleOutlined className="projects-action-icon" />
            </a>,
            <a
              key="repo_url"
              href={proj.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined className="projects-action-icon" />
            </a>,
          ]}
        >
          <h4>{proj.title}</h4>
          <span className="projects-card-subtitle">{proj.description}</span>
        </Card>
      ))}
    </div>
  </ContentSection>
);

export default Projects;
