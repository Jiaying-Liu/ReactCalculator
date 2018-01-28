import React, { Component } from 'react';

export default class OperatorButton extends Component {

    onClick() {
        if(this.props.clickOperator) {
            this.props.clickOperator(this.props.label);
        }
    }

    render() {
        return (
            <button className={this.props.className} onClick={this.onClick.bind(this)}>
                {this.props.label}
            </button>
        );
    }

};