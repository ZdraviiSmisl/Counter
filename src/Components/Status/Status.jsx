import React from 'react';
import style from './Status.module.css'

class Status extends React.Component {
    constructor(props) {
        super(props);

    }


    render = () => {
        const className = this.props.statusOutput
        // let statusClass = this.props.statusOutput === 'textOutput' ? textOutput :
        //     this.props.statusOutput === 'max' ? style.outputMaxValue :
        //         this.props.statusOutput === 'error' ? style.outputError : '';
        debugger
        return (
            <div className={style.OutputScreen}>
                <div className={style[this.props.statusOutput]}>{this.props.outputValue}</div>
            </div>

        )
    }
}

export default Status;