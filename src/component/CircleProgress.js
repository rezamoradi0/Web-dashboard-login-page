import React, { Component } from 'react';
class CircleProgress extends Component {

    render() { 
        return (<span className='circle-progress'>
            <span className='clip-path'></span>
            <span className='clip-path2'></span>
            <span className='clip-path3'></span>
        <span className='circle-center-hidener' >
        
           <span> 10<span className='gary'>%</span></span>
         
        </span>
        </span>);
    }
}
 
export default CircleProgress;