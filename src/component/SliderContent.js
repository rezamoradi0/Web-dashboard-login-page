import React, { Component } from "react";
import Message from "./Welcome";
class SliderContent extends Component {
  render() {
    return <div className="the-slider">
       <div className="the-slider-body">
        <span className="the-slider-subject">FINOTIC</span>
        <span className="the-slider-center"></span>
       </div> 
    <Message header="Welcome back" text="here is a lot of featuers for you :) alaki"/>
    </div>;
  }
}

export default SliderContent;
