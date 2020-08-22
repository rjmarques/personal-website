import { Card } from "antd";
import React from "react";

import ContentSection from "../common/ContentSection";

import "./Skills.less";

interface ISkill {
  icon: any;
  title: string;
  url: string;
}

const skills: ISkill[] = [
  {
    icon: require("./img/react.svg"),
    title: "react",
    url: "https://reactjs.org/",
  },

  {
    icon: require("./img/typescript.svg"),
    title: "typescript",
    url: "https://www.typescriptlang.org/",
  },
  {
    icon: require("./img/go.svg"),
    title: "golang",
    url: "https://golang.org/",
  },
  {
    icon: require("./img/postgres.svg"),
    title: "postgresql",
    url: "https://www.postgresql.org/",
  },
  {
    icon: require("./img/java.svg"),
    title: "java ee",
    url: "https://www.oracle.com/technetwork/java/javaee/overview/index.html",
  },
  {
    icon: require("./img/javascript.svg"),
    title: "javascript",
    url: "https://www.javascript.com/",
  },
  {
    icon: require("./img/angular.svg"),
    title: "angular",
    url: "https://angular.io/",
  },
  {
    icon: require("./img/docker.svg"),
    title: "docker",
    url: "https://www.docker.com/",
  },
];

const Skills = () => (
  <ContentSection
    title="Expertise"
    subTitle="The technologies I am proficient in"
    wrapperClass="skills"
  >
    <div className="skills-card-row materialize">
      {skills.map((skill: ISkill) => (
        <a
          key={skill.title}
          href={skill.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card
            className="skills-card"
            hoverable={true}
            cover={<img alt={skill.title} src={skill.icon} />}
          >
            <div className="skills-card-meta">{skill.title}</div>
          </Card>
        </a>
      ))}
    </div>
  </ContentSection>
);

export default Skills;
