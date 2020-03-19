import React from 'react';
import style from './Button.module.css'

class Button extends React.Component {
state={
error:false
}

    render() {
        return (

            <button className={this.state.error ? style.error : ''}

                    onClick={this.props.onBtnClick} disabled={this.props.disabled}>{this.props.name}</button>

        )
    }
}

export default Button;