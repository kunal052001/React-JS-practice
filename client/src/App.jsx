import React from 'react'
import Register from './components/Register'
import Login from './components/Login'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path='/Register' element={ <Register/>}>Register</Route>
        <Route path='/Login' element={ <Login/>}>login</Route>
      </Routes>
      </Router>
      
      
    </div>
  )
}

export default App