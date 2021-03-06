import React from "react";

import "./ContentSection.less";

interface IProps {
  title: string;
  wrapperClass: string;
  subTitle: string;
  children: React.ReactNode;
}

const ContentSection = (props: IProps) => (
  <section className={props.wrapperClass}>
    <div className="content">
      <div className="content-title">
        <h2>{props.title}</h2>
        <span className="section-sub-title">{props.subTitle}</span>
      </div>
      {props.children}
    </div>
  </section>
);

export default ContentSection;
