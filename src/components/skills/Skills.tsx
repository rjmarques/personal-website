import React from 'react';
import { Card, CardContent, CardMedia } from '@mui/material';
import ContentSection from '../common/ContentSection';
import goIcon from './img/go.svg';
import javaIcon from './img/java.svg';
import postgresIcon from './img/postgres.svg';
import dockerIcon from './img/docker.svg';
import typescriptIcon from './img/typescript.svg';
import reactIcon from './img/react.svg';
import './Skills.scss';

interface ISkill {
  icon: string;
  title: string;
  url: string;
}

const skills: ISkill[] = [
  {
    icon: goIcon.src,
    title: 'golang',
    url: 'https://golang.org/',
  },
  {
    icon: javaIcon.src,
    title: 'java ee',
    url: 'https://www.oracle.com/technetwork/java/javaee/overview/index.html',
  },
  {
    icon: postgresIcon.src,
    title: 'postgresql',
    url: 'https://www.postgresql.org/',
  },
  {
    icon: dockerIcon.src,
    title: 'docker',
    url: 'https://www.docker.com/',
  },
  {
    icon: typescriptIcon.src,
    title: 'typescript',
    url: 'https://www.typescriptlang.org/',
  },
  {
    icon: reactIcon.src,
    title: 'react',
    url: 'https://reactjs.org/',
  },
];

const Skills: React.FC = () => (
  <ContentSection
    title="Expertise"
    subTitle="The technologies I am proficient in"
    wrapperClass="skills"
  >
    <div className="skills-card-row">
      {skills.map((skill: ISkill) => (
        <a
          key={skill.title}
          href={skill.url}
          target="_blank"
          rel="noopener noreferrer"
          className="skill-link"
        >
          <Card className="skills-card" elevation={2}>
            <CardMedia
              component="img"
              src={skill.icon}
              alt={skill.title}
              className="skill-image"
            />
            <CardContent className="skills-card-meta">
              {skill.title}
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  </ContentSection>
);

export default Skills;
