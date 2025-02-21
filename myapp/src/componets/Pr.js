import React, { useEffect,useState  } from 'react'


export default function Pr(){
    const [state,setState]=useState([])
    useEffect(()=>{
         fetch('https://dummyjson.com/products')
         .then((res)=>
             res.json()
         )
         .then((ret)=>setState(ret.products))
         
    },[])
    
    return(
           <div>

<ul>
        {state.map((item) => (
          <li key={item.id}>  {/* Use key prop here */}
            <h1>{item.title}</h1>
            <h3>ID: {item.id}</h3>
          </li>
        ))}
      </ul>

           </div>
    )
}