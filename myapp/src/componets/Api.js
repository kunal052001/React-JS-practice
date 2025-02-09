import React, { useEffect,useState} from "react";
// import './Api.css'

function Api() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json()) // Convert response to JSON
      .then((data) => {
       
        setState(data.products)
       
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

const styles={
  field:{
    width: '100wh',
    height: '100vh'
  },
  area:{
    display:'flex',
    flexWrap:'wrap',
    gap:'10px'
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
          state.length > 0 ?(state.map((arr)=>(
            <div style={styles.card} key={arr.id}>
                <h1>{arr.title}</h1>
                <p>{arr.description}</p>
                <img style={styles.ima} src={arr.thumbnail} alt={arr.title}  />
            </div>          
           ))

          ) :(<div>..........loading</div>)
        }
      </div>
    </div>
  );
}

export default Api;
