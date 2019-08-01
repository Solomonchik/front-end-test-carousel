import React, {Component} from 'react';

const imges = [
    {url: require('../img/Lufthansa.png'), alt: '1'},
    {url: require('../img/audi.png'), alt: '2'},
    {url: require('../img/car2go.png'), alt: '3'},
    {url: require('../img/hugo_boss.png'), alt: '4'},
    {url: require('../img/35_porsche.png'), alt: '5'},
    {url: require('../img/daimler.png'), alt: '6'},
    {url: require('../img/aida.png'), alt: '7'},
    {url: require('../img/deutsche_bahn.png'), alt: '8'},
    {url: require('../img/costa.png'), alt: '9'},
];


class Labels extends Component {
    renderImg() {
        return imges.map((image, index) => {
            return (
                <li
                    key={index}>
                    <img src={image.url} alt={image.alt}/>
                </li>
            )
        })
    }
    render() {
        return (
            <div className={'labelContainer'}>
                <ul className={'labelUl'}>
                    {this.renderImg()}
                </ul>
            </div>
        );
    }
}

export default Labels;