import { useState } from "react"
import React from 'react'

function Task(){
    const [state,setState]=useState(" ")
    const [todo,setTodo]=useState([])
    const [placeholder,setPlaceholder]=useState("")

    function additon(){
         const val=[...todo,state]
         setTodo(val)
         setState('')
    }
    function deleta(inj){
        const newtodo=[...todo]
        newtodo.splice(inj,1)
        setTodo(newtodo)
    }
    
    function update(inj){
       
        const unewtodo=[...todo]
        setPlaceholder("write some text here to update")
        unewtodo[inj]=state
        setTodo(unewtodo)
    }
  return (
    <div>Todo
           <input 
           placeholder={placeholder}
           value={state}
           onChange={(e)=>setState(e.target.value)}
           type='text'/>
           <button onClick={additon}>ADD</button>
           <div>
            { todo.map((val,index)=>(
                <li key={index} > {val} <span><button onClick={()=>deleta(index)}> delete</button><button onClick={()=>update(index)}> UPDATE</button></span></li>
            ))

            }
           </div>

    </div>

  )
}




export default Task