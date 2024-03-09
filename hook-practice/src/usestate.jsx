import { useState } from "react";

export default function Usestate() {
  let [count, setCount] = useState(0);
  function countPlus() {
    count = count + 1;
    setCount(count)
  }
  function countdec() {
      if(count > 0){
        count = count - 1;
    }
    setCount(count)

  }
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={countPlus}>Count plus</button>
      <button onClick={countdec}>Count decr</button>
    </div>
  );
}
