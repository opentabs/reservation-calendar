import React from 'react';

class BookAmount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const randomTimesBooked = Math.floor(Math.random() * 100);
    return (
      <div className="book-amount">
        <p className="book-notice">Booked {randomTimesBooked} times today</p>
      </div>
    );
  }
}

export default BookAmount;
