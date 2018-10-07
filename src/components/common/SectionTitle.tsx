import * as React from "react";

import "./SectionTitle.less";

interface IProps {
  title: string;
  subTitle: string;
}

class SectionTitle extends React.Component<IProps, {}> {
  public render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <span className="Section-sub-title">{this.props.subTitle}</span>
      </div>
    );
  }
}

export default SectionTitle;
