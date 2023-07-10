import React, { Component } from "react";
import Message from "./Welcome";
import CircleProgress from "./CircleProgress";
class SliderContent extends Component {
  render() {
    return <div className="the-slider">
       <div className="the-slider-body">
        <span className="the-slider-subject">{this.props.subject}</span>
        <span className="the-slider-center">
        <span className="the-slider-object top-object">
            <CircleProgress/>
        </span>
        <span className="the-slider-object right-object">
            <CircleProgress/>
        </span>
        <span className="the-slider-object left-object">
            <CircleProgress/>
        </span>
        </span>
       </div> 
    <Message header={this.props.welcome} text={this.props.welcomeText}/>
    </div>;
  }
}

export default SliderContent;
