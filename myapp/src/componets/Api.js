import React, { useEffect,useState} from "react";
// import './Api.css'

function Api() {
  const [state, setState] = useState([]);
  const [page,setPage]=useState(1)
  const no=3;

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json()) // Convert response to JSON
      .then((data) => {
       
        setState(data.products)
       
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

    const lastindex=page*no;
    const firstindex=lastindex-no;
    const cardas=state.slice(firstindex,lastindex)
    const totalpage=Math.ceil(state.length/no);
const styles={
  field:{
    width: '100wh',
    height: '100vh',
    justifyContent:'centre',
   alignItem:'centre',
   display:'flex',
   flexDirection:'column',
   paddingLeft:'300px'
    
  //  display: "flex",
  //  flexDirection: "column",
  //  alignItems: "center",
  //  justifyContent: "center",
  //  minHeight: "100vh",
  //  padding: "20px",
  },
  area:{
    display:'flex',
    flexWrap:'wrap',
    gap:'10px',
    justifyContent:'centre'
  },
  card:{
      border:'2px solid black',
      justifyContent:'centre',
      padding:'5px',
      height:'350px',
      width:'250px'

  },
  ima:{
    height:'100px',
    width:'100px'
  }
}

  return (
    <div style={styles.field}>
    
          <div style={styles.area}>
        {
          cardas.length > 0 ?(cardas.map((arr)=>(
            <div style={styles.card} key={arr.id}>
                <h1>{arr.title}</h1>
                <p>{arr.description}</p>
                <img style={styles.ima} src={arr.thumbnail} alt={arr.title}  />
            </div>          
           ))

          ) :(<div>..........loading</div>)
        }
      </div>
      <div>
        <button onClick={()=>setPage(page-1)} >PREV</button>
        <span style={{backgroundColor:'red',font:'bold'}}>{page}outof{totalpage}</span>
        <button onClick={()=>setPage(page+1)}> NEXT</button>
      </div>
    </div>
  );
}

export default Api;
