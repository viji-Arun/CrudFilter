import React, { useRef } from 'react';

function MyComponent1() {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    inputRef.current.focus(); // Focuses the input element
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}
export default MyComponent1
