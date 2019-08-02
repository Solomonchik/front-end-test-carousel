import React, {Component} from 'react';

class TopNavigation extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.closeHandler = this.closeHandler.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    closeHandler() {
        this.setState({
            isOpen: false
        })
    }


    render() {
        const clsMenu = ["hamburgerMenu"];
        const clsDrawer = ["drawer"];
        let bodySelector = document.getElementsByTagName("body");

        if(this.state.isOpen) {
            clsMenu.push("hamburgerMenu-active");
            clsDrawer.push("drawerIsOpened")
        } else {
            for ( let i in clsMenu) {
                if(clsMenu[i] === "hamburgerMenu-active") {
                    clsMenu.splice(i, 1)
                }
            }
            for ( let i in clsDrawer) {
                if(clsDrawer[i] === "drawerIsOpened") {
                    clsDrawer.splice(i, 1)
                }
            }
        }

        if(!this.state.isOpen) {
            clsDrawer.push("close")
        }



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

                <div className={clsMenu.join(" ")} onClick={this.toggle}>
                    <div className={'line1'}/>
                    <div className={'line2'}/>
                    <div className={'line3'}/>
                </div>
                <div className={clsDrawer.join(" ")}>
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
                </div>
            </div>
        );
    }
}

export default TopNavigation;