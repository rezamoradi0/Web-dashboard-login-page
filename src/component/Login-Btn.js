import React, { Component } from 'react';
class LoginBtn extends Component {
    constructor(props){
        super(props);
        this.ClassName=this.props.ClassName;
    }
    render() { 
        return (<button className={this.ClassName}>
            <i className={this.props.Icon}> </i>
            {this.props.Text}
        </button>);
    }
}
 
export default LoginBtn;