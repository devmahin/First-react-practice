import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <studen></studen>
    </>
  )
}


function studen (){
  let name = "mahin";
  let age = 34;
  return <h1>My name is {name} . I am {age} years old</h1>;
}


  function Person (){
    let name = "mahin";
    let age = 34;
    return <h1>My name is {name} . I am {age} years old</h1>;
  }





export default App
