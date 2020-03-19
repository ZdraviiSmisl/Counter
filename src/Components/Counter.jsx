import React from 'react';
import style from './Counter.module.css';
import Display from '../Display/Display';
import Settings from './Settings/Settings';

// import {saveState, restoreState} from './../OutsideComponents/LocalStorage'

class Counter extends React.Component {

    state = {
        resetDisable: true,
        incrDisable: true,
        setDisable: true,
        startValue: 0,
        maxValue: 0,
        outputValue: 0,
        startValueStorage: 0,
        maxValueStorage: 0
        /*errorStart: false,
        errorMax: false*/

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
            setDisable: true,
            outputVariable: 0,
            startValue: 0,
            maxValue: 0,
            startValueStorage: 0,
            maxValueStorage: 0
        };
        let stateToString = localStorage.getItem('defaultState');
        if (stateToString !== null) {
            state = JSON.parse(stateToString);

        }
        this.setState(state);
    };


    setMaxValue = (valueMax) => {
        this.setState({
            maxValue: valueMax,
            outputValue: 'input value and press "set"',
            setDisable: false
        }, () => this.saveState())
    };

    setStartValue = (valueStart) => {
        this.setState({
            startValue: valueStart,
            outputValue: 'input value and press "set"',
            setDisable: false
        }, () => this.saveState())
    };

    setValue = () => {
        this.setState({
            startValueStorage: this.state.startValue,
            maxValueStorage: this.state.maxValue,
            outputValue: this.state.startValueStorage,
            setDisable: true,
            resetDisable: false,
            incrDisable: false
        })
    };

    incrementCounter = () => {
        if (this.state.startValueStorage < this.state.maxValueStorage) {
            this.setState({
                    startValueStorage: Number(this.state.startValueStorage) + 1,


                },
                () => {
                    this.saveState();
                    if (this.state.startValueStorage === this.state.maxValueStorage) {
                        this.setState({
                            outputValue: this.state.startValueStorage


                        })
                    }

                })
        } else {
            this.setState({
                    incrDisable: true,
                    outputValue: this.state.startValueStorage,
                /*    startValueStorage: this.state.startValue*/
                },
                () => this.saveState())
        }
    };
    resetCounter = () => {
        this.setState({
                incrDisable: false,
                outputValue: this.state.startValueStorage
            },
            () => this.saveState());


    };


    render() {


        return (
            <div className={style.Wrap}>

                <Display
                    outputValue={this.state.outputValue}
                    setValue={this.setValue}
                    incrementCounter={this.incrementCounter}
                    resetDisable={this.state.resetDisable} incrDisable={this.state.incrDisable}
                    resetCounter={this.resetCounter}/>
                <Settings startValue={this.state.startValue}
                          maxValue={this.state.maxValue}
                          setValue={this.setValue}
                          setMaxValue={this.setMaxValue}
                          setStartValue={this.setStartValue}
                          errorStart={this.state.errorStart} errorMax={this.state.errorMax}
                          setDisable={this.props.setDisable}/>
            </div>
        );
    };
}

export default Counter;