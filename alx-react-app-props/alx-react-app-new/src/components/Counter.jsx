
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      {/* Display current count */}
      <p style={{ fontSize: '24px', color: 'darkblue' }}>
        Current Count: {count}
      </p>
      
      {/* Buttons to update the count */}
      <button 
        onClick={() => setCount(count + 1)}
        style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}
      >
        Increment
      </button>
      <button 
        onClick={() => setCount(count - 1)}
        style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}
      >
        Decrement
      </button>
      <button 
        onClick={() => setCount(0)}
        style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
