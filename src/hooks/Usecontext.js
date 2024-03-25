// Usecontext.js
import React, { useContext } from 'react';
import MyContext from './MyContext'; 

function MyComponent() {
  const contextValue = useContext(MyContext);

  return <div>{contextValue}</div>;
}

export default MyComponent;
