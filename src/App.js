import React, { useState, useEffect } from 'react'
import './App.css';
import List from '../src/components/List/list'



function App() {

  const [state, setState] = useState([]);

  return (
    <div className='App'>
      <List/>
    </div>
  );
};

export default App;
