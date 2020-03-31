import React from 'react';
import style from './Button.module.css'

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className={this.props.errorButton ? `${style.btn} ${style.error}` : style.btn}
                    onClick={this.props.onBtnClick} disabled={this.props.disabled}>
                {this.props.name} </button>
        )
    }
}

export default Button;