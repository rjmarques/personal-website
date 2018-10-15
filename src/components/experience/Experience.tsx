import { Icon } from "antd";
import * as React from "react";

import SectionTitle from "../common/SectionTitle";

import "./Experience.less";

interface IExperienceEntry {
  company: string;
  endingDate: string;
  jobTitle: string;
  location: string;
  technologies: string[];
  startingDate: string;
  roles: string[];
  url: string;
}

class Experience extends React.Component {
  private experienceEntries: IExperienceEntry[] = require("./content.json");

  public render() {
    return (
      <section className="Experience">
        <div className="content">
          <SectionTitle
            title="Experience"
            subTitle="What I have done professionally"
          />
          <div className="Experience-timeline">{this.getExpEntries()}</div>
        </div>
      </section>
    );
  }
  private getExpEntries(): JSX.Element {
    return (
      <ul>
        {this.experienceEntries.map(entry => (
          <li
            key={entry.jobTitle + entry.company}
            className="Experience-timeline-entry"
          >
            <div className="Experience-timeline-content">
              <h3>
                {entry.jobTitle} -{" "}
                <a href={entry.url} target="_blank">
                  {entry.company}
                </a>
              </h3>
              <div className="Experience-subtitle">
                <span>
                  {entry.startingDate} to {entry.endingDate}
                </span>
                <span>|</span>
                <span>
                  <Icon type="environment" /> {entry.location}
                </span>
              </div>
              <div className="Experience-roles">
                {entry.roles.map((role, index) => (
                  <p key={"p_" + index}>{role}</p>
                ))}
              </div>
              <div className="Experience-technologies">
                <h4>main tools: </h4>
                <div className="Experience-technologies-items">
                  {entry.technologies.map(tech => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default Experience;
