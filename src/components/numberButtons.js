import React from 'react';

//import Number from './number';

const NumberButtons = (props) => {
  return (
    <div>
      <div>
        <button className='btn btn-secondary' onClick={(event) => props.onButtonClick(1)}>1</button>
        <button className='btn btn-secondary' onClick={(event) => props.onButtonClick(2)}>2</button>
        <button className='btn btn-secondary' onClick={(event) => props.onButtonClick(3)}>3</button>
      </div>
      <div>
        <button className='btn btn-secondary' onClick={(event) => props.onButtonClick(4)}>4</button>
        <button className='btn btn-secondary' onClick={(event) => props.onButtonClick(5)}>5</button>
        <button className='btn btn-secondary' onClick={(event) => props.onButtonClick(6)}>6</button>
      </div>
      <div>
        <button className='btn btn-secondary' onClick={(event) => props.onButtonClick(7)}>7</button>
        <button className='btn btn-secondary' onClick={(event) => props.onButtonClick(8)}>8</button>
        <button className='btn btn-secondary' onClick={(event) => props.onButtonClick(9)}>9</button>
      </div>
      <div style={{float: 'right'}}>
        <button className='btn btn-secondary' onClick={(event) => props.onButtonClick(0)}>0</button>
        <button className='btn btn-secondary' onClick={(event) => props.onButtonClick('.')}>.</button>
      </div>
    </div>
  );
};

export default NumberButtons;
