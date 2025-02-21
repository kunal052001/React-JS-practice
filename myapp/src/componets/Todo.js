import React, { useState } from 'react'

export const Todo = () => {
    const [state,setState]=useState(" ")
    const [todo,setTodo]=useState([])

    function additon(){
         const val=[...todo,state]
         setTodo(val)
    }
    function deleta(inj){
        const newtodo=[...todo]
        newtodo.splice(inj,1)
        setTodo(newtodo)
    }
    function update(inj){
        const unewtodo=[...todo]
        unewtodo[inj]=state
        setTodo(unewtodo)
    }
  return (
    <div>Todo
           <input 
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
