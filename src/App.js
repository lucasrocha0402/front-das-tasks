import React from 'react';
import './App.css';
import TaskList from './Components/titulo';
import AcessandoTdsTask from './Components/acessandoTdsTask'; // Certifique-se de que o caminho está correto

function App() {
  return (
    <div className="App">
      <TaskList/>
      <AcessandoTdsTask />
    </div>
  );
}

export default App;