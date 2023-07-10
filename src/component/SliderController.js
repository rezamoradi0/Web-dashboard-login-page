import React, { Component } from "react";
class SliderController extends Component {
  constructor(props) {
    super(props);
    this.state={
      counter:0
    }
   
    this.counterHandler = (intDirection) => {
      console.log("intDirection : "+intDirection);
      
      if(intDirection>0&&this.state.counter<3){
        this.setState({counter:this.state.counter+1},()=>{
          console.log("counter : "+this.state.counter);
        });
       
      }

      else if(intDirection<0&&this.state.counter>0){
        this.setState({counter:this.state.counter-1},()=>{
          console.log("counter : "+this.state.counter);
        });
       
      }

    };
  }
  render() {
    return (
      <div className="slider-changer">
        <i
          className="fa-solid fa-angle-left changer"
          onClick={() => {
            this.props.changeSlider(-1);
            this.counterHandler(-1);
          }}
        ></i>
      
        <span>
          <i
            className={
              this.state.counter == 0
                ? "fa-sharp fa-solid fa-circle"
                : "fa-duotone fa-circle"
            }
          ></i>
          <i
            className={
              this.state.counter == 1
                ? "fa-sharp fa-solid fa-circle"
                : "fa-duotone fa-circle"
            }
          ></i>
          <i
            className={
              this.state.counter == 2
                ? "fa-sharp fa-solid fa-circle"
                : "fa-duotone fa-circle"
            }
          ></i>
          <i
            className={
              this.state.counter == 3
                ? "fa-sharp fa-solid fa-circle"
                : "fa-duotone fa-circle"
            }
          ></i>
        </span>
        <i
          className="fa-solid fa-angle-right changer"
          onClick={() => {
            this.props.changeSlider(1);
            this.counterHandler(1);
          }}
        ></i>
      </div>
    );
  }
}

export default SliderController;
