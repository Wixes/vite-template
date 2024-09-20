import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App, Error } from '@pages/';

const enableMocking = async () => {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('../shared/api/mocks/browser.ts');

  return worker.start();
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
]);

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
});
