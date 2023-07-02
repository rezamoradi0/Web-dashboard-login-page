import React, { Component } from "react";
import Welcome from "./Welcome";
import Input from "./Login-input";
import Button from "./Login-Btn";
class LoginForm extends Component {
  render() {
    return (
      <div className="login-form">
        <Welcome header="Welcome Back !" text="Hi My dear friend welcome back , login"/>
        <Input
        Name="email"
          LeftIcon="fa-regular fa-envelope"
          PlaceHolder="Enter Email Here .."
          InputType="email"
        />
        <Input
         Name="password"
          LeftIcon="fa-regular fa-lock"
          PlaceHolder="Enter Password"
          RightIcon="fa-sharp fa-solid fa-eye"
          InputType="password"
        />
        <a style={{textAlign:"right",margin:"5px 0px" , color: "rgb(0, 102, 254)",textDecoration:"none"}} href="test">Forget password? </a>
        <Button Text="Login" ClassName="btn btn-center" />
        <div className="spliter">
        <span className="line" ></span> <span className="or">  or</span>    <span className="line" ></span>
        </div>
        <div className="div-septator">
        <Button ClassName="btn btn-left " Text="Google" Icon="fa-brands fa-google red" />
        <Button ClassName="btn btn-right " Text="FaceBook" Icon="fa-brands fa-facebook blue"/>
        </div>
        <div className="have-not-account">
          <span>Dont You have an account? </span>
          <a href="test">Sign Up</a>
        </div>
      </div>
    );
  }
}

export default LoginForm;
