import React from 'react';
import style from './Settings.module.css';
import Button from './../Reusable_components/Button/Button'


class Settings extends React.Component {
    state = {
        setTitle: 'set'

};

onSetMaxValue = (e) => {
    debugger
    let valueMax = e.currentTarget.value;
    this.props.setMaxValue(valueMax);
};
onSetStartValue = (e) => {
    let valueStart = e.currentTarget.value;
    this.props.setStartValue(valueStart);

};

render = () => {
    return (
        <div className={style.Wrap}>
            <span> MaxValue:<input className={this.props.errorMax ? 'error' : ''}
                                   value={this.props.maxValue}
                                   onChange={this.onSetMaxValue}
                                   type='number'
            /></span>
            <span>StartValue:<input
                className={this.props.errorStart ? 'error' : ''}
                                    value={this.props.startValue}
                                    onChange={this.onSetStartValue}
                                     type='number'
            /></span>

            <Button name={this.state.setTitle} onBtnClick={this.props.setValue} disabled={this.props.setDisable}/>

        </div>
    );
};
}


export default Settings;