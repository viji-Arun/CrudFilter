import React from 'react';
import Example from './hooks/Usestate';
import Example1 from './hooks/Useeffect';
import MyComponent from './hooks/Usecontext';
import MyContext from './hooks/MyContext'; 
import MyComponent1 from './hooks/useRef';
import Counter from './hooks/Counter';
import MyComponent2 from './hooks/useCallback';
import ExpensiveCalculation from './hooks/Usememo';
import CrudComponent from './crud/CrudOperation';
import './App.css';
import App1 from './Filter';

function App() {
  
  return (
    <div>
     <h1>Hello, Hooks in react</h1>
      <h1>useState</h1>
      <Example />
      <h1>useEffect</h1>
      <Example1/>
      <h1>useContext</h1>
      <MyContext.Provider value="Hello from context!">
      <MyComponent />
    </MyContext.Provider>
    <h1>useRef</h1>
     <MyComponent1 />
    <h1>useReducer</h1>
    <Counter/>
    <h1>useCallback</h1>
    <MyComponent2/>
    <h1>usememo</h1>
     <ExpensiveCalculation a={5} b={10} /> 
      <ExpensiveCalculation a={2} b={3} /> 
      <h1>Crud Operations</h1>
      <CrudComponent/>
     
      <h1>Filter</h1>
      <App1/>
     
    </div>
    
  );
}

export default App;
