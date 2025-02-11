import React, { useState,useEffect } from 'react'
import './Mode.css'

function Mode(){
    const [state,setState]=useState("light")

     useEffect(()=>{
        document.querySelector("body").className=state
    },[state])

    // function change(){
    //     if(state==="dark")
    //     {
    //         setState("light")
    //     }
    //     else{
    //         setState("dark")
    //     }
    // }
return(
    <div className={state}>
        <div>HAY THIS IS LIGHT MODE AND DARK MODE</div>
        <button className={state==='light' ?'dark':'light' } onClick={()=>state==='light' ?setState('dark'):setState('light')} >CHAGE MODE</button>
    </div>
)
}
export default Mode;