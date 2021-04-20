import React, { Component } from "react";
import './Hero.css';

/*
    A large banner image that will cover the full width of the screen
    Props:
        - img: the link to the image for the banner
        - imgVerticalOffset: The position of the image from the top expressed
                             as a percentage. 50% is centered.
        - imgOpacity: specifies the image opacity, ranging from 0-1
        - title: title text displayed over the image
        - subtitle: subtitle displayed under the title
        - id: optional id parameter for specific css styling. default is ""
*/
class Hero extends Component {
    constructor (props) {
        super(props);

        this.id = this.props.id;
        if (this.id === undefined) {
            this.id = "";
        }
        this.class = this.props.class;
        if (this.class === undefined) {
            this.class = "";
        }
    }
    
    render() {
        return (
            <div className={"hero-container " + this.class} id={this.id}>
                <img className={"hero-img " + this.class} src={this.props.img} alt="biking" 
                     style={{
                         objectPosition: "50% " + this.props.imgVerticalOffset,
                         opacity: this.props.imgOpacity
                     }}/>
                <div className="hero-text">
                    <h1 className="hero-title">{this.props.title}</h1>
                    <p className="hero-subtitle">{this.props.subtitle}</p>
                </div>
            </div>
        )
    }
}

export default Hero