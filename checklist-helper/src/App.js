import React from 'react';
import './App.css';
import { GlobalState } from './global/GlobalState';
import Router from './routes/Router';

function App() {

  return (
    <div className="flex flex-col gap-6 items-center">
      <GlobalState>
        <Router/>
      </GlobalState>
    </div>
  );
}

export default App;
