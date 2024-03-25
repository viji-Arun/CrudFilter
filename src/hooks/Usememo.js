import React, { useMemo } from 'react';

function ExpensiveCalculation({ a, b }) {
  const result = useMemo(() => {
    // Expensive calculation here
    return a * b;
  }, [a, b]);

  return <div>Result: {result}</div>;
}
export default ExpensiveCalculation 
