/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import React from 'react';
import Date from './Date.jsx';
import Time from './Time.jsx';
import '../styling/datetimebox.css';

class DateTimeBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="datetime-container">
        <Date />
        <Time />
      </div>
    );
  }
}

export default DateTimeBox;
