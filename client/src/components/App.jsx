import React from 'react';
import Reservation from './Reservation.jsx';
import '../styling/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
