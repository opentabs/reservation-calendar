import React from 'react';
import ReactDOM from "react-dom";
import '../styling/partysize.css';

class PartySize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 20,
    };
  }

  render() {
    const selection = [];
    for (let i = 1; i <= this.state.size; i += 1) {
      selection.push(`For ${i}`);
    }
    return (
      <div>
        <h1 className="party-size">Party Size</h1>
        <select className="drop-down">
          {selection.map((option, i) => (
            <option key={i}>{option}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default PartySize;
