import React from "react";

import ContentSection from "../common/ContentSection";

import "./Publications.less";

interface IPublication {
  conference: string;
  paper: string;
  urls: string[];
}

const publications: IPublication[] = [
  {
    conference: "Sac'14",
    paper:
      "On the Support of Task-Parallel Algorithmic Skeletons for Multi-GPU Computing",
    urls: ["https://dl.acm.org/doi/10.1145/2554850.2555018"],
  },
  {
    conference: "Euro-Par 2013",
    paper:
      "Algorithmic Skeleton Framework for the Orchestration of GPU Computations",
    urls: ["http://link.springer.com/chapter/10.1007%2F978-3-642-40047-6_86"],
  },
];

const Publications = () => (
  <ContentSection
    title="Publications"
    subTitle="Papers I have published"
    wrapperClass="publications"
  >
    <ul className="materialize">
      {publications.map((pub) => (
        <li key={pub.conference} className="publications-entry">
          <div className="app-card-wide">
            <h3>{pub.conference}</h3>
            <div className="app-card-subtitle">
              <span>{pub.paper}</span>
            </div>
            {pub.urls.map((url) => (
              <div key={url}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {url}
                </a>
              </div>
            ))}
          </div>
        </li>
      ))}
    </ul>
  </ContentSection>
);

export default Publications;
