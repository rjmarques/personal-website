import { Card, Col, Row } from "antd";
import * as React from "react";

import SectionTitle from "../common/SectionTitle";

import "./Skills.less";

interface ISkill {
  icon: any;
  title: string;
  url: string;
}

class Skills extends React.Component {
  private skills: ISkill[] = [
    {
      icon: require("./img/angular.svg"),
      title: "angular",
      url: "https://angular.io/"
    },
    {
      icon: require("./img/react.svg"),
      title: "react",
      url: "https://reactjs.org/"
    },
    {
      icon: require("./img/javascript.svg"),
      title: "javascript",
      url: "https://www.javascript.com/"
    },
    {
      icon: require("./img/sass.svg"),
      title: "sass",
      url: "https://sass-lang.com/"
    },
    {
      icon: require("./img/typescript.svg"),
      title: "typescript",
      url: "https://www.typescriptlang.org/"
    },
    {
      icon: require("./img/java.svg"),
      title: "java ee",
      url: "https://www.oracle.com/technetwork/java/javaee/overview/index.html"
    },
    {
      icon: require("./img/postgres.svg"),
      title: "postgresql",
      url: "https://www.postgresql.org/"
    },
    {
      icon: require("./img/c++.svg"),
      title: "c++",
      url: "http://www.cplusplus.com/"
    }
  ];

  public render() {
    return (
      <section className="Skills">
        <div className="content">
          <SectionTitle
            title="Expertise"
            subTitle="The technologies I am proficient in"
          />
          <div>
            <Row gutter={16} className="Skills-card-row">
              {this.getSkills()}
            </Row>
          </div>
        </div>
      </section>
    );
  }

  private getSkills(): JSX.Element[] {
    return this.skills.map((skill: ISkill) => (
      <Col key={skill.title} xs={24} sm={24} md={6} lg={6} xl={6}>
        <a href={skill.url} target="_blank">
          <Card
            className="Skills-card"
            hoverable={true}
            cover={<img alt="example" src={skill.icon} />}
          >
            <div className="Skills-card-meta">{skill.title}</div>
          </Card>
        </a>
      </Col>
    ));
  }
}

export default Skills;
