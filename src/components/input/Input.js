import React from 'react';
import './input.css';
const Input = (props) =>{
   return(
     <div className='inputs'>
        <label><span>Title</span><br/>
            <input placeholder='Enter the title' value={props.name} type='text' onChange={(e)=>{props.getname(e.target.value)}}/>
        </label>
        <label><span>Describe</span><br/>
            <textarea placeholder='Describe your note' value={props.age1} rows='4' onChange={(e)=>{props.getage(e.target.value)}} />
        </label>
     </div>
   );
}
export default Input;