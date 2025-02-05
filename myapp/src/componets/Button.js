import React, { useState } from 'react'
import './Button.css'

export default function Button() {
  const [state,setState]=useState()
  function kunal()
  {
   setState(!state)
  }
  
  // const page={
    
  //   backgroundColor:state?'blue':'red',
  //   height:'100vh',
  //   display:'flex',
  //   flexDirection:'column',
  //   alignItems:'center',
  //   justifyContent:'center',

 
   
   
  // }
  // // const button={
  //   padding: '10px 20px',
  //   fontSize: '16px',
  //   backgroundColor: state ? 'red' : 'blue',
  //   color: 'white',
  //   border: 'none',
  //   borderRadius: '5px',
  //   cursor: 'pointer',
  // };
  
  return (
    

    <div className='page' style={{backgroundColor: state ? 'blue' : 'red'}}>
           <h1>creating buttton here with on off functionality</h1>
           <button className='button' style={{backgroundColor: state ? 'red' : 'blue'}} onClick={kunal} >
            {state ? 'ON':'OFF'}
            </button>
           </div>
           
    
  );
}
