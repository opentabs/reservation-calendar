import React from 'react';
import ReactDOM from 'react-dom';
import ReservationTitle from './ReservationTitle.jsx';
import PartySize from './PartySize.jsx';
import FindTable from './FindTable.jsx';
import DateTimeBox from './DateTimeBox.jsx';

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="main-container">
        <ReservationTitle />
        <PartySize />
        <DateTimeBox />
        <FindTable />
      </div>
    );
  }
}

export default Reservation;
