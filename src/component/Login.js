import React, { Component } from 'react';
import LoginInfo from './Login-info';
import LoginForm from './Login-form';
import "./../sass/login.scss";
class LoginPage extends Component {

    render() { 
        return (<div className='login-page'>
        <LoginInfo/>
        <LoginForm/>
        </div>);
    }
}
 
export default LoginPage;