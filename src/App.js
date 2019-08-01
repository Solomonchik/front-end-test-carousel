import React, {Component} from 'react';
import Test from './components/Carousel'
import TopNavigation from './components/TopNavigation'
import Labels from "./components/Labels";


class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <TopNavigation/>
                </div>
                <div className={'main-container'}>
                    <Test/>
                </div>
                <div>
                    <Labels/>
                </div>
            </div>
        );
    }
}

export default App;