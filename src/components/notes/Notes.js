import React from 'react';
import './notes.css';
const Notes = (props) =>{
  return(
     <div className='notes'>
         <h1 className='h1'>TiTLE</h1>
         <h3 className='h2'>{props.names}</h3>
         <h1 className='h1'>Notes</h1>
         <h3 className='h2'>{props.age}</h3>
         <div class='p_button'>
         <a className='buttons' onClick={()=>{props.click(props.obj)}} href='#'>Delete</a>
         </div>
     </div>
  );
}
export default Notes;