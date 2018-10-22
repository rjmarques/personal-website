import { Icon } from "antd";
import * as React from "react";

import SectionTitle from "../common/SectionTitle";

import "./Education.less";

class Education extends React.Component {
  public render() {
    return (
      <section className="Education">
        <div className="content">
          <SectionTitle title="Education" subTitle="My academic background" />
          <div>
            <ul>
              <li className="Education-entry">
                <div className="App-card-wide">
                  <h3>
                    MSc In Computer Science -{" "}
                    <a href="https://www.fct.unl.pt/en" target="_blank">
                      New University of Lisbon
                    </a>
                  </h3>
                  <div className="App-card-subtitle">
                    <span>2010 to 2012</span>
                    <span>|</span>
                    <span>
                      <Icon type="environment" /> Lisbon
                    </span>
                  </div>
                  <div>
                    Dissertation:{" "}
                    <a
                      href="https://run.unl.pt/handle/10362/8382"
                      target="_blank"
                    >
                      Algorithmic skeleton framework for the orchestration of
                      GPU computations
                    </a>
                  </div>
                  <div>
                    Source Code:{" "}
                    <a
                      href="https://bitbucket.org/MarrowTeam/marrow"
                      target="_blank"
                    >
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
                    <span>2007 to 2010</span>
                    <span>|</span>
                    <span>
                      <Icon type="environment" /> Lisbon
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Education;
