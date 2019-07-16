import React from 'react';
import './App.css';
//TODO: import react fragment

class App extends React.Component {
  render() {
    return (
      //TODO: create counter.
      //TODO counter should contain state: this.state = { count: 0};
      //TODO state should be changed based on clicks to the increment/decroment btns.
      //TODO: state changes should be updated in the p tag.
      <React.Fragment>
        {/* TODO add p element to show current number of clicks. Starts at zero */}
        <p>0</p>
        {/* TODO: add buttons, increment and decroment (+, -)  */}
        <button >+</button>
        <button >-</button>
      </React.Fragment>
    )
  }
}
export default App;
