import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';
import TestsProvider from './context/context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TestsProvider>
      <App />
    </TestsProvider>
  </React.StrictMode>
);
