/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import React from 'react';
import '../styling/reservationtitle.css';

class ReservationTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="reservation-title">
        <h1>Make a reservation</h1>
      </div>
    );
  }
}

export default ReservationTitle;
