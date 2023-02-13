import { CalendarOutlined, EnvironmentOutlined } from "@ant-design/icons";
import React from "react";

import "./DateLocationEntry.less";

interface IProps {
  startingDate: string;
  endingDate: string;
  location: string;
}

const DateLocationEntry = (props: IProps) => (
  <div className="date-location-entry">
    <span className="text">
      <CalendarOutlined /> {props.startingDate} to {props.endingDate}
    </span>
    <span className="text">
      <EnvironmentOutlined /> {props.location}
    </span>
  </div>
);

export default DateLocationEntry;
