import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usestate from './usestate'

function App() {
  let [count, setCount] = useState(0)

    function updateCount(){
      count = count  + 1;
      setCount(count)
    }

    useEffect(() => { 
      console.log("counter")
    },[updateCount])

  return (
    <>
        {/* useState */}
        <Usestate></Usestate>

      <div>
        <h1>count : {count}</h1>
        <button onClick={updateCount}>Click plus</button>
      </div>

    </>
  )
}

export default App
