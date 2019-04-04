import React from 'react';
import ReactDOM from "react-dom";
import '../styling/reservationtitle.css';

class ReservationTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
