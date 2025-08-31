import React from 'react';
import ContentSection from '../common/ContentSection';
import DateLocationEntry from '../common/DateLocationEntry';
import content from './content';
import './Experience.scss';

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

const experienceEntries: IExperienceEntry[] = content;

const Experience: React.FC = () => {
  return (
    <ContentSection
      title="Experience"
      subTitle="What I have done professionally"
      wrapperClass="experience"
    >
      <div className="experience-timeline materialize">
        <ul>
          {experienceEntries.map((entry) => (
            <li
              key={entry.jobTitle + entry.company}
              className="experience-timeline-entry"
            >
              <div className="app-card-wide">
                <h3>
                  {entry.jobTitle} -{" "}
                  <a href={entry.url} target="_blank" rel="noopener noreferrer">
                    {entry.company}
                  </a>
                </h3>
                <div className="app-card-subtitle">
                  <DateLocationEntry
                    startingDate={entry.startingDate}
                    endingDate={entry.endingDate}
                    location={entry.location}
                  />
                </div>
                <div className="experience-roles">
                  {entry.roles.map((role, index) => (
                    <p key={"p_" + index}>{role}</p>
                  ))}
                </div>
                <div className="experience-technologies">
                  <h4>main tools: </h4>
                  <div className="experience-technologies-items">
                    {entry.technologies.map((tech) => (
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
