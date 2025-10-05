"use client"
import React from "react";
import { useState } from "react";
const Calculator = () => {
  const [count, setCount] = useState(0);

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }
  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div>
      <div className=" bg-black p-10 text-white text-center">
        <p className=" font-bold font-extralight text-4xl  text-center max-w-7xl mx-auto mt-10 ">
          Counter
        </p>
        <div className="grid grid-cols-3 mt-10 max-w-7xl mx-auto">
          <div>
            <button onClick={decrementCount}>Decrement-</button>
          </div>
          <div>
            <p>{count}</p>
          </div>
          <div>
            <button onClick={incrementCount}>Increment+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
