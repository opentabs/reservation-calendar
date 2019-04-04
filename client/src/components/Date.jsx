import React from 'react';
import '../styling/date.css';

class Date extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1 className="date-title">Date</h1>
        <selector className="date-selector">Calendar</selector>
      </div>
    );
  }
}

export default Date;
