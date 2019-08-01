import React, {Component} from 'react';

class TopNavigation extends Component {
    render() {
        return (
            <div className={'topNavigation'}>
                {/*eslint-disable-next-line*/}
                <a href="">
                    <img src={require('../img/hydra_logo_web3.png')} alt=""/>
                </a>
                <nav>
                    <ul>
                        <li>
                            {/*eslint-disable-next-line*/}
                            <a href="#" data-description={'UX at ♥'}>
                                AGENCY
                            </a>
                        </li>
                        <li>
                            {/*eslint-disable-next-line*/}
                            <a href="#" data-description={'matters of the heart'}>
                                REFERENCE
                            </a>
                        </li>
                        <li>
                            {/*eslint-disable-next-line*/}
                            <a href="" data-description={'we want you'}>
                                JOBS
                            </a>
                        </li>
                        <li>
                            {/*eslint-disable-next-line*/}
                            <a href="" data-description={"that's the way"}>
                                CONTACT
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default TopNavigation;