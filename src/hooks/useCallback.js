import React, { useState, useCallback } from 'react';

function MyComponent2() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      Count: {count}
      <button onClick={increment}>Increment</button>
    </div>
  );
}
export default MyComponent2