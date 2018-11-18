import React from "react";

import ContentSection from "../common/ContentSection";
import DateLocationEntry from "../common/DateLocationEntry";

import "./Education.less";

const Education = () => (
  <ContentSection
    title="Education"
    subTitle="My academic background"
    wrapperClass="Education"
  >
    <ul className="materialize">
      <li className="Education-entry">
        <div className="App-card-wide">
          <h3>
            MSc In Computer Science -{" "}
            <a href="https://www.fct.unl.pt/en" target="_blank">
              New University of Lisbon
            </a>
          </h3>
          <div className="App-card-subtitle">
            <DateLocationEntry
              startingDate="2010"
              endingDate="2012"
              location="Lisbon"
            />
          </div>
          <div>
            Dissertation:{" "}
            <a href="https://run.unl.pt/handle/10362/8382" target="_blank">
              Algorithmic skeleton framework for the orchestration of GPU
              computations
            </a>
          </div>
          <div>
            Source Code:{" "}
            <a href="https://bitbucket.org/MarrowTeam/marrow" target="_blank">
              https://bitbucket.org/MarrowTeam/marrow
            </a>
          </div>
        </div>
      </li>
      <li className="Education-entry">
        <div className="App-card-wide">
          <h3>
            BSc In Computer Science -{" "}
            <a href="https://www.fct.unl.pt/en" target="_blank">
              New University of Lisbon
            </a>
          </h3>
          <div className="App-card-subtitle">
            <DateLocationEntry
              startingDate="2007"
              endingDate="2010"
              location="Lisbon"
            />
          </div>
        </div>
      </li>
    </ul>
  </ContentSection>
);

export default Education;
