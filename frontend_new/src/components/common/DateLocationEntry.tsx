import React from 'react';
import { CalendarToday, LocationOn } from '@mui/icons-material';
import './DateLocationEntry.scss';

interface DateLocationEntryProps {
  startingDate: string;
  endingDate: string;
  location: string;
}

const DateLocationEntry: React.FC<DateLocationEntryProps> = ({ 
  startingDate, 
  endingDate, 
  location 
}) => {
  return (
    <div className="date-location-entry">
      <span className="text">
        <CalendarToday />{startingDate} to {endingDate}
      </span>
      <span className="text">
        <LocationOn />{location}
      </span>
    </div>
  );
};

export default DateLocationEntry;
