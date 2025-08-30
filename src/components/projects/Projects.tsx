import React from 'react';
import { Card, CardContent, CardMedia, CardActions, IconButton } from '@mui/material';
import { PlayCircleOutline, GitHub } from '@mui/icons-material';
import ContentSection from '../common/ContentSection';
import esp32Image from './img/esp32.png';
import ecsImage from './img/ecs.png';
import somethingOfTheDayImage from './img/something-of-the-day.png';
import wasmMandelImage from './img/wasm-mandel.png';
import solarSystemImage from './img/solar-system.png';
import './Projects.scss';

interface IProject {
  description: string;
  image: { src: string };
  repoUrl: string;
  title: string;
  url: string;
}

const projects: IProject[] = [
  {
    description: "Air quality sensors connected to an ESP32 MCU",
    image: esp32Image,
    repoUrl: "https://github.com/rjmarques/esp32-air-quality-sensor",
    title: "Esp32 Air Quality",
    url: "https://github.com/rjmarques/esp32-air-quality-sensor",
  },
  {
    description: "My own Terraform provisioned ECS cluster",
    image: ecsImage,
    repoUrl: "https://github.com/rjmarques/my-ecs-cluster",
    title: "My ECS Cluster",
    url: "https://github.com/rjmarques/my-ecs-cluster",
  },
  {
    description: "A twitter joke scraper running on ECS",
    image: somethingOfTheDayImage,
    repoUrl: "https://github.com/rjmarques/something-of-the-day",
    title: "Something of the day",
    url: "https://something.ricardomarques.dev/",
  },
  {
    description: "A Fractal WebAssembly Viewer",
    image: wasmMandelImage,
    repoUrl: "https://github.com/rjmarques/webasm-mandelbrot",
    title: "WebAssembly Mandelbrot",
    url: "https://wasmmandel.ricardomarques.dev/",
  },
  {
    description: "My Solar System",
    image: solarSystemImage,
    repoUrl: "https://github.com/rjmarques/SolarSystem",
    title: "WebGL Solar System",
    url: "https://solar.ricardomarques.dev/",
  },
];

const Projects: React.FC = () => (
  <ContentSection
    title="Projects"
    subTitle="Some projects I've done in my free time"
    wrapperClass="projects"
  >
    <div className="projects-card-row">
      {projects.map((proj) => (
        <Card
          key={proj.title}
          className="projects-card"
          elevation={0}
        >
          <CardMedia
            component="img"
            image={proj.image.src}
            alt={proj.title}
          />
          <CardContent className="projects-content">
            <h4>{proj.title}</h4>
            <span className="projects-card-subtitle">{proj.description}</span>
          </CardContent>
          <CardActions className="projects-actions">
            <IconButton
              href={proj.url}
              target="_blank"
              rel="noopener noreferrer"
              className="projects-action-icon"
              aria-label="View demo"
            >
              <PlayCircleOutline />
            </IconButton>
            <IconButton
              href={proj.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="projects-action-icon"
              aria-label="View repository"
            >
              <GitHub />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </div>
  </ContentSection>
);

export default Projects;
