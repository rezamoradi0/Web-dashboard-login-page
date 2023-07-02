import React, { Component } from 'react';
class SliderController extends Component {
    constructor(props){
        super(props);
    
    }
    render() { 
        return (<div className='slider-changer'>
          <i class="fa-solid fa-angle-left changer"></i>
            <span>
            <i class="fa-duotone fa-circle"></i>
          <i class="fa-sharp fa-solid fa-circle"></i>
          <i class="fa-duotone fa-circle"></i>
          <i class="fa-duotone fa-circle"></i>

            </span>
          <i class="fa-solid fa-angle-right changer"></i>
        </div>);
    }
}
 
export default SliderController;