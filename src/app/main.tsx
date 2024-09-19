import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@pages/root/App.tsx';

import './index.css';

const enableMocking = async () => {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('../shared/api/mocks/browser.ts');

  return worker.start();
};

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
