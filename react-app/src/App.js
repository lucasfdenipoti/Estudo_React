import React, { useState } from 'react';
import logo from './logo.svg';
import reactLogo from './react-logo.png';
import cssLogo from './css-logo.png';
import './App.css';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    setTarefas([...tarefas, novaTarefa]);
    setNovaTarefa('');
  };

  const handleRedirect = (tarefa) => {
    if (tarefa === 'Estudar React') {
      window.open('https://reactjs.org', '_blank');
    } else if (tarefa === 'Estudar CSS') {
      window.open('https://developer.mozilla.org/en-US/docs/Web/CSS', '_blank');
    }
  };

  return (
    <div className="container">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Lista de Tarefas</h1>
      
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Digite uma nova tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li
            key={index}
            className="fonte-personalizada"
            style={{ cursor: 'default' }}
          >
            {tarefa}
          </li>
        ))}
      </ul>
      <footer className="footer">
        <div className="footer-content">
          <img
            src={reactLogo}
            alt="React"
            onClick={() => handleRedirect('Estudar React')}
            className="footer-icon"
          />
          <img
            src={cssLogo}
            alt="CSS"
            onClick={() => handleRedirect('Estudar CSS')}
            className="footer-icon"
          />
        </div>
      </footer>
    </div>
  );
}

export default App;