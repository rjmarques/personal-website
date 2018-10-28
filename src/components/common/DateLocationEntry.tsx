import { Icon } from "antd";
import React from "react";

import "./DateLocationEntry.less";

interface IProps {
  startingDate: string;
  endingDate: string;
  location: string;
}

const DateLocationEntry = (props: IProps) => (
  <div className="Date-location-entry">
    <span>
      <Icon type="calendar" /> {props.startingDate} to {props.endingDate}
    </span>
    <span>
      <Icon type="environment" /> {props.location}
    </span>
  </div>
);

export default DateLocationEntry;
