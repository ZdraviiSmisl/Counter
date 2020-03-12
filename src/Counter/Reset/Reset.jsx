import React from 'react';
import style from './Reset.module.css';

class Reset extends React.Component {
    render = () => {

        return (
            <div className={style.Reset}>
                <button onClick={this.props.ResetCounter} disabled={this.props.resetDisable}>Reset</button>
            </div>
        );
    };


}

export default Reset;