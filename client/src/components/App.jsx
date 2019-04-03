/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import React from 'react';
import Reservation from './Reservation.jsx';
import '../styling/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="reservation-container">
        <Reservation />
      </div>
    );
  }
}
export default App;
