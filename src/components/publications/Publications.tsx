import * as React from "react";

import SectionTitle from "../common/SectionTitle";

import "./Publications.less";

interface IPublication {
  conference: string;
  paper: string;
  urls: string[];
}

class Publications extends React.Component {
  private publications: IPublication[] = [
    {
      conference: "Sac'14",
      paper:
        "On the Support of Task-Parallel Algorithmic Skeletons for Multi-GPU Computing",
      urls: ["http://nova-lincs.di.fct.unl.pt/publication/1329"]
    },
    {
      conference: "Euro-Par 2013",
      paper:
        "Algorithmic Skeleton Framework for the Orchestration of GPU Computations",
      urls: ["http://link.springer.com/chapter/10.1007%2F978-3-642-40047-6_86"]
    }
  ];

  public render() {
    return (
      <section className="Publications">
        <div className="content">
          <SectionTitle
            title="Publications"
            subTitle="Papers I have published"
          />
          <div>{this.getPublications()}</div>
        </div>
      </section>
    );
  }

  private getPublications(): JSX.Element {
    return (
      <ul>
        {this.publications.map(pub => (
          <li key={pub.conference} className="Publications-entry">
            <div className="App-card-wide">
              <h3>{pub.conference}</h3>
              <div className="App-card-subtitle">
                <span>{pub.paper}</span>
              </div>
              {pub.urls.map(url => (
                <div key={url}>
                  <a href={url} target="_blank">
                    {url}
                  </a>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default Publications;
