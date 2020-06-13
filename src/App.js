import React from 'react';
import {useState} from "react";
import Morning from "./morning";
import './App.css';

function App() {
  let [count,setCount] = useState(1);
  let [isMorning , setMorning] = useState(true);

  return (
    <div className={`box ${isMorning ? 'morning' :'night'}` }>
    <Morning daychanging={isMorning} />
    <h1>counter {count}</h1>
    
    <button onClick={()=>setCount(count+1)}>update count</button>

    <button onClick={()=>setMorning(!isMorning)}>change day night</button>
    
   
    </div>
  );
}

export default App;
