import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components/App';
import { GlobalStyles } from 'commonStyle/GlobalStyles';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyles />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>
);
