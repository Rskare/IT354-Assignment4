import React from 'react';
import Add from './components/Add';
import Edit from './components/Edit'
import './style.css';

export default function App() {
  return (
    <div class="container">
        <div class="row">
          <Add />
          <Edit />
        </div>
    </div>
  );
}

export default App;
