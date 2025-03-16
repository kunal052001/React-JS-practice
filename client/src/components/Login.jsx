import React, { useState } from 'react'
import axios from 'axios'

function Login() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    function handleLogin(e) {
        e.preventDefault();
    
        axios.post(
            "http://localhost:5000/login",
            { email, password },
            { headers: { "Content-Type": "application/json" } } // ✅ Ensure JSON data is sent
        )
        .then((result) => {
            console.log(result);
            alert(result.data.message);
        })
        .catch((err) => {
            console.error("Login error:", err.response?.data || err.message);
            alert(err.response?.data?.message || "Something went wrong");
        });
    
        setEmail("");
        setPassword("");
    }
    

  return (
    <div>
        <form onSubmit={handleLogin}>
            <label> username</label><input type='text'name='email'value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter email'></input>
            <label>Password</label><input type='text' name='password'value={password} onChange={(e)=>setPassword(e.target.value)} ></input>
            <button type='submit'>LOGG IN</button>
        </form>
    </div>
  )
}

export default Login