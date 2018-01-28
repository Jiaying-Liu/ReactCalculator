import React from 'react';
import OperatorButton from './operatorButton';

const OperatorButtonLayout = (props) => {
    return (
        <div>
            <OperatorButton className='btn btn-secondary' label='C' clickOperator={props.clear} />
            <div>
                <OperatorButton className='btn btn-secondary' label='+' clickOperator={props.getSym} />
                <OperatorButton className='btn btn-secondary' label='-' clickOperator={props.getSym} />
            </div>
            <div>
                <OperatorButton className='btn btn-secondary' label='*' clickOperator={props.getSym} />
                <OperatorButton className='btn btn-secondary' label='/' clickOperator={props.getSym} />
            </div>
            <div>
                <OperatorButton className='btn btn-secondary' label='(' clickOperator={props.getSym} />
                <OperatorButton className='btn btn-secondary' label=')' clickOperator={props.getSym} />
            </div>
            <OperatorButton className='btn btn-primary' label='=' clickOperator={props.calculate} />
        </div>
    );
}

export default OperatorButtonLayout;