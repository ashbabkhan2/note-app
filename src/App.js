import React, { useState } from 'react';
import Input from './components/input/Input';
import './App.css';
import Parent_input from './components/parent_input/Parent_input';
import Checker from './Checker';
import Notes from './components/notes/Notes';
const App = () =>{
  const [arr,setarr] = useState([]);
  const [names,setname] = useState('')
  const [age,setage] = useState('');
  const [err,seterr] =useState();
  var id=0;
  const getname = (name) =>{
     setname(name);
  }
  const ages = (a)=>{
     setage(a);
  }
  const insert_value = ()=>{
    id = Math.floor((Math.random()*10000)*age);
    if(names.trim().length===0 || age.trim().length===0){
      console.log('Nothing enter');
      seterr({title:'Invalid input',message:'Title and Notes cannot be empty'})
    }
   
    else {
    setarr((previous)=>{
      return [{name:names,age:age,id:id},...previous];
    });
    setname('');
    setage('');
  }
  
}
  const okay = () =>{
    seterr(undefined);
  }
  const delete_value = (e1) =>{
     var some_value= arr.indexOf(e1);
     if(some_value!==-1){
     arr.splice(some_value,1);
     console.log(arr);
    //  var c = lists;
     setarr((prev)=>{
       return [...prev];
     })
    }

    //  setlists(c);
  }

   return(
   <div className='App'>
     {/* input values */}
       { err && <Checker title={err.title} b={okay} mess={err.message}/> }
     <Parent_input>
       <h2>Note making app</h2>
       <Input  getname={getname} name={names}  age1={age} getage={ages} />
       <a href='#' onClick={insert_value}>ADD</a>
       </Parent_input>

       {/* append values */}
       <Parent_input>
       {arr.map((e)=>{
        return <Notes key={e.id}  click={delete_value} obj={e}  names={e.name} age={e.age}/> 
        // <h1 key={e.id} onClick={()=>{delete_value(e)}} className='h11'>Name is {e.name} and age is {e.age}</h1>
       })}
       </Parent_input>
     </div>
   );
}
export default App;