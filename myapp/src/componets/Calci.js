import React, { useState } from 'react'

export default function Calci(){
    const [res,setRes]=useState(0);
    const [no1,setNo1]=useState(0);
    const [no2,setNo2]=useState(0)
    function calculate(){
       setRes(parseFloat(no1)+parseFloat(no2))
    }
    
    return(
        <div>

            <h1> hay this is calculator program</h1>
            <h1>enter no 1</h1>
             <input onChange={(e)=>setNo1(e.target.value)} type='text'/>
            <h1>enter no 2</h1>
            <input onChange={(e)=>setNo2(e.target.value)} type='text'/>
            <button onClick={calculate}> result</button>
            <h1>result{res}</h1>
        </div>
    )
}