import { Icon } from "antd";
import React from "react";

import "./DateLocationEntry.less";

interface IProps {
  startingDate: string;
  endingDate: string;
  location: string;
}

class DateLocationEntry extends React.Component<IProps, {}> {
  public render() {
    return (
      <div className="Date-location-entry">
        <span>
          <Icon type="calendar" /> {this.props.startingDate} to{" "}
          {this.props.endingDate}
        </span>
        <span>
          <Icon type="environment" /> {this.props.location}
        </span>
      </div>
    );
  }
}

export default DateLocationEntry;
