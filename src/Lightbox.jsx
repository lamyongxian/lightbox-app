import React from 'react';
import logo from './logo.svg';
import vueLogo from './vue.png';
import angularLogo from './angular.svg';
import './Lightbox.css';

export class Lightbox extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            header: props.header,
            images: [logo, vueLogo, angularLogo],
            showImageIndex: 0,
            show: false
        };
    }

    componentDidMount()
    {

    }

    onImageClick = number => props =>
    {
        //alert(number);
        this.setState({
            showImageIndex: number,
            show: true
        });
    }

    onCloseClick = () =>
    {
        //alert("close");
        this.setState({
            show: false
        });
    }

    onLeftClick = () =>
    {
        //alert("left");
        this.setState((prevState, props) => {
            let number = (prevState.showImageIndex > 0 ? 1 : 0);
            // If index already 0, do nothing
            return {showImageIndex: prevState.showImageIndex - number};
        });
    }

    onRightClick = () =>
    {
        //alert("right");
        this.setState((prevState, props) => {
            let number = (prevState.showImageIndex < prevState.images.length - 1 ? 1 : 0); 
            // If index already max, do nothing
            return {showImageIndex: prevState.showImageIndex + number};
        });
    }

    render()
    {
        const {images, showImageIndex, show} = this.state;

        return (
        <div className="main">
            {show ?
                <div className="popup">
                    <span className="close hover" onClick={this.onCloseClick}>&times;</span>
                    <div>
                        {showImageIndex > 0 ?
                            <div className="left hover" onClick={this.onLeftClick}>&lt;</div> : ""
                        }
                        {showImageIndex < images.length - 1 ?
                            <div className="right hover" onClick={this.onRightClick}>&gt;</div> : ""
                        }
                        <div className="popupImage">
                            <img  src={images[showImageIndex]}></img>
                        </div>
                    </div>
                </div> : ""
            }
            <h1 className="header">{this.state.header}</h1>
            <div className="row">
                {images.map((image, i) => (
                    <div className="column" key={"col"+i}>
                        <img src={image} onClick={this.onImageClick(i)}></img>
                    </div>)
                )}
            </div>
        </div>);
    }
}