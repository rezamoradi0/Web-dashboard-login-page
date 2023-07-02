import React, { Component } from "react";
class Input extends Component {
  constructor(props) {
    super(props);
    console.log(props.InputType)
    this.state={
      passShow:false
    }
    this.haveLeftIcon = this.props.LeftIcon != null;
    this.haveRightIcon = this.props.RightIcon != null;
  }

  showThePassword=()=>{
   
    this.setState({    passShow:!this.state.passShow}
  
    )
  };

  render() {
    return (
      <div className="login-input">
        {this.haveLeftIcon ? (
          <i className={"input-icon " + this.props.LeftIcon}> </i>
        ) : (
          <i></i>
        )}
        <input
          type={this.props.InputType=="password"? (!this.state.passShow?"password":"text") :this.props.InputType}
          name={this.props.Name}
          placeholder={this.props.PlaceHolder}
        />
        {this.haveRightIcon ? (
          <i className={"input-icon " + this.props.RightIcon + (!this.state.passShow?"":" small")}  onMouseDown={ this.showThePassword} onMouseUp= {this.state.passShow? this.showThePassword:null} onMouseLeave={this.state.passShow? this.showThePassword:null}> </i>
        ) : (
          <i></i>
        )}
      </div>
    );
  }
}

export default Input;
