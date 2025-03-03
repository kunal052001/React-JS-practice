import { useEffect, useState } from "react";
import React from "react";

function Fetcha() {
  const [state, setState] = useState([]);
  const [page,setPage]=useState(1)
  const size=3

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((str) => {
        console.log("Fetched API Data:", str); // Logging API response
        setState(str.posts);
      })
      .catch((err) => console.error(err));
  }, []);
 

  const lastindex=page*size;
  const firstindex=lastindex-size;
  const cardes=state.slice(firstindex, lastindex)
  const totalpages=Math.ceil(state.length/size)

  const Style = {
    head: {
      width: "100vw",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "pink",
      padding: "20px",
    },
    listContainer: {
      display:"flex",
      flexWrap:"wrap",
      justifyContent:"space-between"

    },
    crd: {
      backgroundColor:"yellow",
      border:"2px solid black",
      Height:"150px",
      width:"200px",
      padding:"20px",
      margin:"20px",
     justifyContent:"centre"

    },
  };

  return (
    <div style={Style.head}>
      <h1>Hey, I am fetching API</h1>

      <div>
        {cardes.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <div style={Style.listContainer}>
            {cardes.map((val) => (
              <div style={Style.crd} key={val.id}>
                <h3>{val.title}</h3>
                <p>{val.body}</p>
              </div>
            ))}
          </div>
        )}
        <button disabled={page===1} onClick={()=>setPage(page-1)}>PREV-PAGE</button><div>TOTAL PAGES ....{totalpages}</div><button disabled={page===totalpages} onClick={()=>setPage(page+1)} >NEXT-PAGE</button>
      </div>
    </div> 
  );
}

export default Fetcha;
