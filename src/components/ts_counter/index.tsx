'use client'
import React, { useState } from 'react';

// Optional: Define a type for the component props if you need them later
interface CounterProps {
  initialCount?: number;
}

// We use React.FC (Function Component) and pass our CounterProps
const Counter: React.FC<CounterProps> = ({ initialCount = 0 }) => {
  
  // Explicitly defining the type as <number>. 
  // Though optional here due to inference, it's a great habit!
  const [count, setCount] = useState<number>(initialCount);

  // Strongly typed event handler
  const handleIncrement = (): void => {
    setCount(prevCount => prevCount + 1);
  };

  const handleReset = (): void => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h2>TypeScript Counter</h2>
      <p>Current Count: <strong>{count}</strong></p>
      
      <button onClick={handleIncrement}>
        Increment
      </button>
      
      <button onClick={handleReset} style={{ marginLeft: '10px' }}>
        Reset
      </button>
    </div>
  );
};

export default Counter;