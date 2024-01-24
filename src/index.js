import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { GlobalStyles } from 'CommonStyle/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyles />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>
);
