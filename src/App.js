import React from 'react';
import Counter from './components/Counter';
import Controls from './components/Controls';
import { ConfigProvider } from './configContext';
import './App.css';

function App() {

  return (
    <div className="App">
      <ConfigProvider>
        <Counter />
        <Controls />
      </ConfigProvider>
    </div>
  );
}

export default App;
