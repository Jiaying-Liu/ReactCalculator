import React, { Component } from 'react';

export default class ResultBar extends Component {
  constructor(props) {
    super(props);
  }

  getNum(num) {
    newResult = this.state.result + num;
    this.setState({ result: newResult });
  }

  render() {
    return(
      <div className="result-bar">
        {this.state.result}
      </div>
    );
  }
}
