import "./App.css";
import { useEffect, useState } from "react";
import {Routes,Route} from "react-router-dom"
function App() {
  const [count, setcount] = useState(0);

  const[arr,setarr] = useState([]);
  

  const fetchusers = async () => {
    const api = "https://api.github.com/users"
    const fetchapi = await fetch(api)
    const res = await fetchapi.json()
    console.log(res);
    setarr(res)
    
    
  };

  console.log("arr ===>",arr);

  useEffect(() => {
    console.log("loe");
    fetchusers();
    return(() => {
      console.log("component unmounted")
    })
  },[])

  return (
    <>
      <h1>Count:- {count}</h1>
      <button onClick={() =>
        {setcount(count+1)}
      }> add </button>
      <button onClick={() =>
      
        {
          if(count>0) {
            setcount(count-1)
          }
        }
      
      }> sub </button>

      <button onClick={() =>
        {setcount(0)}
      }> reset </button>


    {arr?.map((ele,id)=> {
      
      return (
        
        <p key={id}>{ele.login}</p>
        
      )
    }).length}
    </>
  );
}

export default App;
