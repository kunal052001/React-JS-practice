import React from 'react'

export const Display = ({ data }) => {
  return (
    <div> <div> <h1>FORM DATA</h1></div>
                 
    <div>
       <ul>   <li >NAME:{data.name}</li>
              <li >EMAIL:{data.email}</li>
              <li >MOBIELNO:{data.mobile}</li>
              <li >PASWORD:{data.password}</li>
      </ul> 
      </div>  
      </div>
  )
}
