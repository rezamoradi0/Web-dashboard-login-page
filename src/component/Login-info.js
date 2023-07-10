import React, { Component ,createRef } from "react";
import SliderController from "./SliderController";
import SliderContent from "./SliderContent";
class LoginInfo extends Component {
  constructor(props){
    super(props);
 
      this.selectedIndex=0
    
    this.ref_sliderHolder= new createRef();
    this.changeSlider=(intMove)=>{
      this.ref_sliderHolder.current.scrollBy(this.ref_sliderHolder.current.offsetWidth*intMove,0);

    }
  }
  componentDidMount(){
    
  }
  render() {
    return (
      <div className="login-info">
        <div ref={this.ref_sliderHolder} className="sliders-holder">
          <SliderContent subject="All Free" welcome="Totaly is Free"  welcomeText="This App  Free and Will Be Free For all time Never Ask You Money" />
          <SliderContent subject="High Speed" welcome="High Speed " welcomeText="High Speed Download And Upload and shareing Yout Files to Friends and Family ,"/>
          <SliderContent subject="No Limited" welcome="No Limit for Uplodaing File " welcomeText="There is no Limit for Uplodaing File Creating Groups and Channels" />
          <SliderContent subject="Group And Channels" welcome="Thousends Groups and Channel" welcomeText="There Is Thousends Groups and Channel For Discusting For Trade and Learning"/>
        </div>
        <SliderController changeSlider={this.changeSlider}/>
      </div>
    );
  }
}

export default LoginInfo;
