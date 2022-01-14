import { useState } from "react";
import "./Counter.css";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="count">Count: {count}</div>
      <div>
        <button className="button" onClick={() => setCount((c) => c - 1)}>
          -
        </button>
        <button className="button" onClick={() => setCount((c) => c + 1)}>
          +
        </button>
      </div>
    </div>
  );
}
