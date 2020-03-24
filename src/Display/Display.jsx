import React from 'react';
import style from './Display.module.css';
import Button from './../Components/Reusable_components/Button/Button'
import Status from "../Components/Status/Status";


class Display extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {

        titleInc: 'inc',
        titleRes: 'res'
    };
    render = () => {

        return (
            <div className={style.Display}>
                <Status statusOutput={this.props.statusOutput} outputValue={this.props.outputValue}/>
                <Button name={this.state.titleInc} onBtnClick={this.props.incrementCounter}
                        disabled={this.props.incrDisable} errorButton={this.props.errorButton}/>
                <Button name={this.state.titleRes} onBtnClick={this.props.resetCounter}
                        disabled={this.props.resetDisable} errorButton={this.props.errorButton}/>

            </div>
        );
    };
}


export default Display;


{/*  <Increment IncrementCounter={this.props.IncrementCounter} counterDisable={this.props.counterDisable}/>
                <Reset ResetCounter={this.props.ResetCounter} resetDisable={this.props.resetDisable}/>*/
}