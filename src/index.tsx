import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from 'App';
import reportWebVitals from 'reportWebVitals';

import i18n from 'config/i18n';
import GlobalStyle from 'theme/GlobalStyle';

i18n.init();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
