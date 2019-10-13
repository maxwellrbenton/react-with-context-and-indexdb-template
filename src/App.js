import React from 'react';
import { connect } from 'react-redux';
import { setData } from './actions'
import './App.css';


function App(state) {

  function handleOnClick(event) {
    state.setData(state.count + 1)
  }

  return (
    <div className="App">
      <h3>{state.count}</h3>
      <button onClick={handleOnClick}>Add One</button>
    </div>
  );
}

export default connect(state => ({ ...state }), { setData })(App);
