import React from 'react';
import style from './Settings.module.css';
import Button from './../Reusable_components/Button/Button'
import Display from "../../Display/Display";


class Settings extends React.Component {
    constructor(props) {
        super(props);

    }
    state = {
        setTitle: 'set'

    };

    onSetMaxValue = (e) => {
        let valueMax = e.currentTarget.value;
        this.props.setMaxValue(valueMax);

    };
    onSetStartValue = (e) => {
        let valueStart = e.currentTarget.value;
        this.props.setStartValue(valueStart);

    };

    render = () => {
debugger
        return (
            <div className={style.Wrap}>
            <span> MaxValue:<input
                className={this.props.errorMax ? style.error : ''}
                value={this.props.maxValue}
                onChange={this.onSetMaxValue}
                type='number'
            /></span>
                <span>StartValue:<input
                    className={this.props.errorStart ? style.error : ''}
                    value={this.props.startValue}
                    onChange={this.onSetStartValue}
                    type='number'
                /></span>

                <Button name={this.state.setTitle} onBtnClick={this.props.setValue} disabled={this.props.setDisable}
                        errorButton={this.props.errorButton}/>

            </div>
        );
    };
}


export default Settings;