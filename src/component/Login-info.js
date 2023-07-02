import React, { Component } from "react";
import SliderController from "./SliderController";
import SliderContent from "./SliderContent";
class LoginInfo extends Component {
  render() {
    return (
      <div className="login-info">
        <div className="sliders-holder">
          <SliderContent />
        </div>
        <SliderController sliderCount={4} />
      </div>
    );
  }
}

export default LoginInfo;
