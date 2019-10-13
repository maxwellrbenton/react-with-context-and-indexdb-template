import React, { useState } from 'react';
import './App.css';


function App() {
  const [state, setState] = useState({ count: 0 })

  function handleOnClick(event) {
    setState({
      count: state.count + 1
    })
  }

  return (
    <div className="App">
      <h3>{state.count}</h3>
      <button onClick={handleOnClick}>Add One</button>
    </div>
  );
}

export default App;
