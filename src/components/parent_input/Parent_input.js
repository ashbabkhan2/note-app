import React from 'react';
import './parent_input.css';
const Parent_input = (props) =>{
  return(
    <div className='parent_input'>
        {props.children}
    </div>
  );
}
export default Parent_input;