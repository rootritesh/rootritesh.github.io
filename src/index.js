import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ParticlesBg from 'particles-bg';

ReactDOM.render(
  <React.StrictMode>
          <ParticlesBg num={1} type="color" bg={true} />
      
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


