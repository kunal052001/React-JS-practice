import React, { useState } from "react";
import { Display } from "./Display";

export default function Forma(){
    const [state,setState]=useState({name:"",email:"",mobile:"",password:""})
    const [submit,setSubmit]=useState({})
    const [error,setError]=useState({})
    function handle(e){
        const {name,value}=e.target;
        setState({...state,[name]:value})
    
    }
   
    function handlesubmit(e){
        e.preventDefault();
        let temperr={}
        if(!state.name ){
             temperr.name="name field is required"
             
        }
        if(!state.mobile){
            temperr.mobile="plese enter the number"
          
        }
        if(!state.email){
            temperr.email="plses enter email"
        }
        if(!state.password){
            temperr.password="PASSS IS field is required"
        }
        if(Object.keys(temperr).length>0){
            setError(temperr)
           
        }else{
            setSubmit(state)
        }
          
    }
    return(
        <div> 
            <form onSubmit={handlesubmit} >
             <h3>Name</h3>
             <input name="name" value={state.name} onChange={handle} type="text"></input>
            {error.name && <p> {error.name}</p>}
             <h3>email</h3>
             <input name="email" value={state.email} onChange={handle}></input>
              {error.email && <p>{error.email}</p>}
              <h3>MOBILE NUMBER</h3>
             <input name="mobile" value={state.mobile} onChange={handle}></input>
             {error.mobile && <p>{error.mobile}</p>}
             <h3>password</h3>
             <input name="password" value={state.password} onChange={handle}></input>
             {error.password && <p>{error.password}</p>}
             <button type="submit" >SUBMIT</button>
            </form>
           
              {submit && <Display data={submit}/>}  
        </div>
    )
}