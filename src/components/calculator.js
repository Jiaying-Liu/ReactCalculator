import React, { Component } from 'react';
import Math from 'mathjs';

//import ResultBar from './result_bar';
import NumberButtons from './numberButtons';
import OperatorButtonLayout from './operatorButtonLayout';
import OperatorButton from './operatorButton';

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
      newResult = this.state.result.toString() + num;
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

  clearOne() {
    var curResult = this.state.result;
    curResult = curResult.substring(0, curResult.length - 1);
    this.setState({
      initCal: false,
      result: curResult
    });
  }

  square() {
    var curResult = this.state.result;
    curResult = Math.eval(curResult.toString() + '^(2)').toString();
    this.setState({
      initCal: true,
      result: curResult
    });
  }

  squareRoot() {
    var curResult = this.state.result;
    curResult = Math.eval('sqrt(' + curResult.toString() + ')').toString();
    this.setState({
      initCal: true,
      result: curResult
    });
  }

  render() {
    return (
      <div className="calculator centered">
        <div className="result-bar">
          <input className='form-control' value={this.state.result} disabled={true} />
        </div>
        <div className="buttons">
          <div className="numberButtons">
            <div className="clearButtons" >
              <OperatorButton className='btn btn-secondary' label='C' clickOperator={this.clear.bind(this)} />
              <OperatorButton className='btn btn-secondary' label='(' clickOperator={this.getSym.bind(this)} />
              <OperatorButton className='btn btn-secondary' label=')' clickOperator={this.getSym.bind(this)} />
            </div>
            <NumberButtons onButtonClick = {this.getSym.bind(this)} />
          </div>
          <div className="operatorButtons">
            <OperatorButtonLayout 
              getSym={this.getSym.bind(this)} 
              calculate={this.calculate.bind(this)}
              clear={this.clear.bind(this)}
              square={this.square.bind(this)}
              squareRoot={this.squareRoot.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}
