import React from 'react';
import OperatorButton from './operatorButton';

const OperatorButtonLayout = (props) => {
    return (
        <div>
            <div>
                <OperatorButton className='btn btn-secondary' label='+' clickOperator={props.getSym} />
                <OperatorButton className='btn btn-secondary' label='-' clickOperator={props.getSym} />
            </div>
            <div>
                <OperatorButton className='btn btn-secondary' label='*' clickOperator={props.getSym} />
                <OperatorButton className='btn btn-secondary' label='/' clickOperator={props.getSym} />
            </div>
            <div>
                <OperatorButton 
                    className='btn btn-secondary' 
                    label='x^2' 
                    clickOperator={props.square} />
                <OperatorButton className='btn btn-secondary' label='sqrt' clickOperator={props.squareRoot} />
            </div>
            <div>
                <OperatorButton className='btn btn-secondary' label='^' clickOperator={props.getSym} />
                <OperatorButton className='btn btn-secondary' label='%' clickOperator={props.getSym} />
            </div>
            <OperatorButton className='btn btn-primary equal-btn' label='=' clickOperator={props.calculate} />
        </div>
    );
}

export default OperatorButtonLayout;