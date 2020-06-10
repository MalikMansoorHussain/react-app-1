import React from 'react';
import Child1 from "./child1";
import './App.css';

function App() {
  return (
    <div>
    <h1>hello from parent component</h1>
    <Child1 name="malik" age="23"/>
    <Child1 name="mansoor" age="24"/>
    <Child1 name="hussain" age="25"/>
    </div>
  );
}

export default App;
