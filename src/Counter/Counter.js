import React from 'react';
import style from './Counter.module.css';
import Increment from "./Increment/Increment";
import Reset from "./Reset/Reset";

class Counter extends React.Component {
    render = () => {

        return (
            <div className={style.counter}>

                <span> {this.props.count}</span>
                <Increment IncrementCounter={this.props.IncrementCounter} counterDisable={this.props.counterDisable}/>
                <Reset ResetCounter={this.props.ResetCounter} resetDisable={this.props.resetDisable}/>
            </div>
        );
    };
}


export default Counter;