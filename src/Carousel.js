import React from 'react';
import ItemsCarousel from 'react-items-carousel';


const images = [
    {url: './img/1.jpg', alt: '1'},
    {url: './img/2.jpg', alt: '2'},
    {url: './img/3.jpg', alt: '3'},
    {url: './img/4.jpg', alt: '4'},
    {url: './img/5.jpg', alt: '5'},
    {url: './img/6.jpg', alt: '6'},
    {url: './img/7.jpg', alt: '7'},
    {url: './img/8.jpg', alt: '8'},
    {url: './img/9.jpg', alt: '9'},
];

export default class Test extends React.Component {

    createChildren = () => images.map((image) => <img src={require(`${image.url}`)} key={image.id} style={{height: 400, background: '#333', width: '100%'}} alt="asd"/>);

    componentWillMount() {
        this.setState({
            children: [],
            activeItemIndex: 0,
        });

        setTimeout(() => {
            this.setState({
                children: this.createChildren(9),
            })
        }, 100);
    }


    changeActiveItem = (activeItemIndex) => this.setState({activeItemIndex});

    render() {
        const {
            activeItemIndex,
            children,
        } = this.state;

        return (
            <ItemsCarousel
                // Placeholder configurations
                enablePlaceholder
                numberOfPlaceholderItems={5}
                minimumPlaceholderTime={1000}
                numberOfCards={3}
                gutter={9}
                showSlither={false}
                firstAndLastGutter={false}
                freeScrolling={false}

                // Active item configurations
                requestToChangeActive={this.changeActiveItem}
                activeItemIndex={activeItemIndex}
                activePosition={'center'}

                chevronWidth={28}
                rightChevron={'>'}
                leftChevron={'<'}
                outsideChevron={false}
                slidesToScroll={3}
            >
                {children}
            </ItemsCarousel>
        );
    }
}