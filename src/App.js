import React, {Component} from 'react';
import Test from './components/Carousel'

class App extends Component {
    render() {
        return (
            <div>
                <div className={'main-container'}>
                    <Test/>
                </div>
            </div>
        );
    }
}

export default App;