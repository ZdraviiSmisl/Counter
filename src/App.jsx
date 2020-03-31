import React from 'react';
import style from './App.module.css'

import Counter from './Components/Counter';

class App extends React.Component {
    render() {
        return (
            <div className={style.Wrap}>
                <Counter/>
            </div>
        )
    }

}

export default App;
