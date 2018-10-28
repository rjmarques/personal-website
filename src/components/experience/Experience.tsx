import React from "react";

import ContentSection from "../common/ContentSection";
import DateLocationEntry from "../common/DateLocationEntry";

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

const getData = () => {
  return require("./content.json");
};
const experienceEntries: IExperienceEntry[] = getData();

const Experience = () => {
  return (
    <ContentSection
      title="Experience"
      subTitle="What I have done professionally"
      wrapperClass="Experience"
    >
      <div className="Experience-timeline">
        <ul>
          {experienceEntries.map(entry => (
            <li
              key={entry.jobTitle + entry.company}
              className="Experience-timeline-entry"
            >
              <div className="App-card-wide">
                <h3>
                  {entry.jobTitle} -{" "}
                  <a href={entry.url} target="_blank">
                    {entry.company}
                  </a>
                </h3>
                <div className="App-card-subtitle">
                  <DateLocationEntry
                    startingDate={entry.startingDate}
                    endingDate={entry.endingDate}
                    location={entry.location}
                  />
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
      </div>
    </ContentSection>
  );
};

export default Experience;
