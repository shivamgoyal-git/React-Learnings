import { useState } from 'react'

function App() {
  // let counter = 1
  const [counter, setCounter] = useState(1)
  
  const addValue = () => {
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    
  }
  const removeValue =() => {
    setCounter(counter-1)
  }


  return (
    <>
    <h1>Counter App</h1>
    <h2>counter value : {counter} </h2>
    <button onClick={addValue}>Add Value</button>{" "}
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
