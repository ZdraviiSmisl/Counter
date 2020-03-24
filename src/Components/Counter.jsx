import React from 'react';
import style from './Counter.module.css';
import Display from '../Display/Display';
import Settings from './Settings/Settings';

// import {saveState, restoreState} from './../OutsideComponents/LocalStorage'

class Counter extends React.Component {

    state = {
        resetDisable: true,
        incrDisable: true,
        setDisable: false,
        startValue: 0,
        maxValue: 0,
        outputValue: 0,
        errorStart: false,
        errorMax: false,
        errorButton: false,
        statusOutput: 'textOutput'

        /* Buttons = {"set":{title: 'set',statusButtonSet:true},
        'inc':{ title: 'inc',statusButton:false},
      'res':{ title: 'res',statusButton:false}}*/

    };


    componentDidMount() {
          this.restoreState();
    }


    saveState = () => {
        let stateToString = JSON.stringify(this.state);
        localStorage.setItem('defaultState', stateToString);
    };

    restoreState = () => {
        let state = {
            resetDisable: true,
        incrDisable: true,
        setDisable: false,
        startValue: 0,
        maxValue: 0,
        outputValue: 0,
        errorStart: false,
        errorMax: false,
        errorButton: false,
        statusOutput: 'textOutput'
        };
        let stateToString = localStorage.getItem('defaultState');
        if (stateToString !== null) {
            state = JSON.parse(stateToString);

        }
        this.setState(state);
    };

    /*checkStartValue = () => {
        if (this.state.startValue === this.state.maxValue || this.state.startValue < 0 || this.state.startValue > this.state.maxValue) {
            this.setState({
                    outputValue: 'Incorrect value',
                    resetDisable: true,
                    incrDisable: true,
                    setDisable: true,
                    errorMax: true,
                    errorButton: true,
                    errorStart: true,
                    statusOutput: 'error'
                },() => this.saveState())

        } else {
            this.setState({
                outputValue: 'input value and press "set"',
                errorMax: false,
                errorStart: false,
                errorButton: false,
                setDisable: false,
                statusOutput: 'textOutput'
            },() => this.saveState())
        }
    };
*/

    checkValue = () => {
        if (this.state.startValue === this.state.maxValue ||
            this.state.maxValue < 0 ||
            this.state.startValue < 0||
            this.state.startValue > this.state.maxValue) {
            this.setState({
                    outputValue: 'Incorrect value',
                    resetDisable: true,
                    incrDisable: true,
                    setDisable: true,
                    errorStart: true,
                    errorMax: true,
                    errorButton: true,
                statusOutput: 'error'

                },() => this.saveState())
        } else {
            this.setState({
                outputValue: 'input value and press "set"',
                errorMax: false,
                errorStart: false,
                errorButton: false,
                setDisable: false,
                statusOutput: 'textOutput'
            },() => this.saveState())
        }
    };


    setMaxValue = (valueMax) => {
        this.setState({
            maxValue: valueMax,


        }, () => this.checkValue(this.state.maxValue))
    };

    setStartValue = (valueStart) => {
        this.setState({
            startValue: valueStart,
            outputValue: 'input value and press "set"',
            setDisable: false,
            statusOutput: 'textOutput'
        }, () => this.checkValue(this.state.startValue)
        )
    };

    setValue = () => {
        this.setState({
            outputValue: this.state.startValue,
            setDisable: true,
            resetDisable: false,
            incrDisable: false,
            statusOutput: 'textOutput'
        }, () => this.saveState())
    };

    incrementCounter = () => {
        this.setState({outputValue: Number(this.state.outputValue) + 1}, () => {
            if (this.state.outputValue < this.state.maxValue) {
                this.setState({
                    incrDisable: false,
                    statusOutput: 'textOutput'
                },() => this.saveState())

            } else {
                this.setState({incrDisable: true, statusOutput: 'max'}, () => this.saveState())
            }
        })
    };

    resetCounter = () => {
        this.setState({
                incrDisable: false,
                outputValue: this.state.outputValue,
                statusOutput: 'textOutput'
            },
            () => this.saveState());


    };


    render() {


        return (
            <div className={style.Wrap}>


                <Settings
                    errorButton={this.state.errorButton}
                    startValue={this.state.startValue}
                    maxValue={this.state.maxValue}
                    setValue={this.setValue}
                    setMaxValue={this.setMaxValue}
                    setStartValue={this.setStartValue}
                    errorStart={this.state.errorStart}
                    errorMax={this.state.errorMax}
                    setDisable={this.state.setDisable}/>

                <Display
                    errorButton={this.state.errorButton}
                    outputValue={this.state.outputValue}
                    setValue={this.setValue}
                    incrementCounter={this.incrementCounter}
                    resetDisable={this.state.resetDisable}
                    incrDisable={this.state.incrDisable}
                    resetCounter={this.resetCounter}
                    statusOutput={this.state.statusOutput}
                />

            </div>
        );
    };
}

export default Counter;

/*
    setMaxValue = (valueMax) => {
      /!*  if (this.state.startValue < valueMax || valueMax > 0) {*!/
            this.setState({
                maxValue: valueMax,
                outputValue: 'input value and press "set"',
                setDisable: false,
                errorMax: false,
                errorButton: false
            }, () => this.saveState())
        } else {
            this.setState({
                    outputValue: 'Incorrect value',
                    resetDisable: true,
                    incrDisable: true,
                    setDisable: true,
                    errorMax: true,
                    errorButton: true
                }
            )
        }
    };

    setStartValue = (valueStart) => {
        if (valueStart < this.state.maxValue || valueStart > 0) {
            this.setState({
                startValue: valueStart,
                outputValue: 'input value and press "set"',
                setDisable: false,
                errorMax: false,
                errorButton: false
            }, () => this.saveState())
        } else {
            this.setState({
                    outputValue: 'Incorrect value',
                    resetDisable: true,
                    incrDisable: true,
                    setDisable: true,
                    errorMax: true,
                    errorButton: true
                }
            )
        }
    };*/