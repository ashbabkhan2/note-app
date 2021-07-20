import React from 'react';
import './checker.css';
const Checker = (props) =>{
  return (
      <div className='p_checker'>
        <div className='checker'>
         <div class='checker_header'>
             {props.title}
          </div>
         <div className='checker_message'>{props.mess}</div>
         <div className='checker_footer'><a onClick={props.b} href='#'>OK</a></div>
       </div>
       </div>
       );
}
export default Checker;