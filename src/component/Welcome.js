import React, { Component } from 'react';
class Welcome extends Component {
 
    render() { 
        const {header,text}=this.props;
        return (<div className='welcome-message'>
            <p className='welcome-header'>{header}</p>
            <p className='welcome-text'>{text} </p>
        
        </div>);
    }
}
 //Hi My dear friend welcome back , login
export default Welcome;