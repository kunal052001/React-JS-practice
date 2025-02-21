import React, {  useState } from 'react'

export default function Search() {
    const [state,setState]=useState("")
    const [list,setList]=useState([])
    const obj=[{id:1,name:"kunal"},{id:2,name:"ammol"},{id:3,name:"gaurav"},{id:4,name:"nikhil"},{id:5,name:"kunal"},{id:6,name:"ammol"},{id:7,name:"gaurav"},{id:8,name:"nikhil"}]
  
        function search(e){
            setState(e.target.value)
         }

   
    function searched(){
        if(state.length>0)
        {
            let value=obj.filter((k)=>{
              
               return k.name.toLowerCase().includes(state.toLowerCase());

            })
            setList(value)
        }
        else {
            setList([]); 
          }
    }
   
    
  return (
    <div>
        <input value={state} onChange={search} type='text'></input><span><button onClick={()=>searched()} >SEARCH</button></span>
        <div>{list.length>0?list.map((vr,)=>(<ul><li key={vr.id} >{vr.name}</li></ul>)):obj.map((v)=>(<li key={v.id} >{v.name}</li>))}</div>
    </div>
  )
}
