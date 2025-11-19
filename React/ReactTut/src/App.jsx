import "./App.css";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1> count:{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        add
      </button>

      <button
        onClick={() => {
          if (count==0) return
          setCount(count - 1);
        }}
      >
        sub
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        reset
      </button>
    </>
  );
}

export default App;
