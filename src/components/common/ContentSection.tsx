import React from "react";

import "./ContentSection.less";

interface IProps {
  title: string;
  wrapperClass: string;
  subTitle: string;
  children: React.ReactNode;
}

class ContentSection extends React.Component<IProps, {}> {
  public render() {
    return (
      <section className={this.props.wrapperClass}>
        <div className="content">
          <div className="Content-title">
            <h2>{this.props.title}</h2>
            <span className="Section-sub-title">{this.props.subTitle}</span>
          </div>
          <div>{this.props.children}</div>
        </div>
      </section>
    );
  }
}

export default ContentSection;
