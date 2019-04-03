/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import React from 'react';
import '../styling/findtable.css';

class FindTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <button className="button-container">
        Find a Table
      </button>
    );
  }
}

export default FindTable;
