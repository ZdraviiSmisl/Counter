import React from 'react';
import style from './Button.module.css'
import Display from "../../../Display/Display";

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <button className={this.props.errorButton ? style.error : ''}
                    onClick={this.props.onBtnClick} disabled={this.props.disabled}>
                    {this.props.name} </button>

        )
    }
}

export default Button;