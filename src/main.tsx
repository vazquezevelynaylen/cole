import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './routes/Home';
import NotFound from './routes/NotFound';

import '@styles/tokens.css';
import '@styles/dark.css';
import '@styles/globals.css';
import '@styles/utilities.css';

import { registerPwa } from '@lib/pwa';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> }
    ]
  }
]);

registerPwa();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
