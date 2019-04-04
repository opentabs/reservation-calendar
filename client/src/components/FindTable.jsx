import React from 'react';
import '../styling/findtable.css';
import BookAmount from './BookAmount.jsx'

class FindTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
      <button className="button-container">
        <h1 className="find-title">Find a Table</h1>
      </button>
      <BookAmount />
      </div>
    );
  }
}

export default FindTable;
