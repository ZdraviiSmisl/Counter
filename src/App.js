import React from 'react';

import './App.css';
import Counter from "./Counter/Counter";

class App extends React.Component {

    state = {
        resetDisable: true,
        counterDisable: false,
        count: 0

    };

    IncrementCounter = () => {
        if (this.state.count < 5) {
            this.setState({
                count: this.state.count + 1,

                resetDisable: false
            });

        } else if (this.state.count === 5) {
            this.setState(
                {
                    counterDisable: true

                });

        }
    };

    ResetCounter = () => {
        this.setState({count: 0, resetDisable: true, counterDisable: false});


    };


    render = () => {


        return (
            <div className="App">

                <Counter count={this.state.count} IncrementCounter={this.IncrementCounter}
                         resetDisable={this.state.resetDisable} counterDisable={this.state.counterDisable}
                         ResetCounter={this.ResetCounter}/>

            </div>
        );
    };
}

export default App;
