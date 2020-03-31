import React from 'react';
import style from './Settings.module.css';
import Button from './../Reusable_components/Button/Button'

class Settings extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        setTitle: 'set'

    };

    onSetMaxValue = (e) => {
        let valueMax = e.currentTarget.value;
        this.props.inputMaxValue(valueMax);

    };
    onSetStartValue = (e) => {
        let valueStart = e.currentTarget.value;
        this.props.inputStartValue(valueStart);

    };

    render() {
        return (
            <div className={style.wrap}>
                <div className={style.wrap_input}>
                    <label> MaxValue:<input
                        className={this.props.errorMax ? style.error : ''}
                        value={this.props.maxValue}
                        onChange={this.onSetMaxValue}
                        type='number'
                        pattern={'^[0-9]+$'}
                    />
                    </label>
                    <label>StartValue:<input
                        className={this.props.errorStart ? style.error : ''}
                        value={this.props.startValue}
                        onChange={this.onSetStartValue}
                        type='number'
                        pattern={'^[0-9]+$'}
                    /></label>
                </div>
                <div className={style.wrap_button}>
                    <Button name={this.state.setTitle} onBtnClick={this.props.setValue} disabled={this.props.setDisable}
                            errorButton={this.props.errorButton}/>
                </div>

            </div>
        );
    };
}


export default Settings;