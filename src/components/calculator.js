import React, { Component } from 'react';
import Math from 'mathjs';

//import ResultBar from './result_bar';
import NumberButtons from './numberButtons';
import OperatorButtonLayout from './operatorButtonLayout';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initCal: true, 
      result: '0' 
    };
  }

  getSym(num) {
    var newResult;
    if(this.state.initCal) {
      newResult = num;
    } 
    else {
      newResult = this.state.result + num;
    }

    this.setState({
      initCal: false, 
      result: newResult 
    });
  }

  calculate() {
    const newResult = Math.eval(this.state.result).toString();
    this.setState({
      initCal: true,
      result: newResult 
    });
  }

  clear() {
    this.setState({
      initCal: true,
      result: '0'
    })
  }

  render() {
    return (
      <div className="calculator">
        <div className="result-bar">
          <input className='form-control' value={this.state.result} disabled={true} />
        </div>
        <div className="buttons">
          <div className="numberButtons">
            <NumberButtons onButtonClick = {this.getSym.bind(this)} />
          </div>
          <div className="operatorButtons">
            <OperatorButtonLayout 
              getSym={this.getSym.bind(this)} 
              calculate={this.calculate.bind(this)}
              clear={this.clear.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}
