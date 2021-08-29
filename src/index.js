import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css'
import './css/notFound.css'
import MoviesContextProvider from './context/MoviesContext'
ReactDOM.render(
  <React.StrictMode>
    <MoviesContextProvider>
      <App />
    </MoviesContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
