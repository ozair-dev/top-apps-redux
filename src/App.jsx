import React from 'react';
import './App.css';
import { Header } from './features/header';
import { Apps } from './features/apps';

function App() {
  return (
    <div className="App">
      <Header />
      <Apps />
    </div>
  );
}

export default App;
