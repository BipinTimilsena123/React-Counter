import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  const [counter,setCounter]=useState(0);
  const addValue=()=>{
    if(counter<20)
    {
      setCounter(counter+1);
    }
  
  }
  const removeValue=()=>{
  if(counter)
  {
    setCounter(counter-1);
  }
  else{
    setCounter(counter==0);
  }
   
    
  }

  return (
    <>
      <h1>Counter Logic Using React Hooks</h1>
      
      <p>the value of counter is: {counter}</p>
      <button onClick={addValue}>add value</button>
      <br/>
      <button onClick={removeValue}>remove value</button>
    
    </>
  )
}

export default App
