import './Counter.css'
import { useState } from "react";


const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if(count!=0)
        {
            setCount(count - 1);
        }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};



export default Counter;