import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';
import './index.css';

const router = createBrowserRouter(routes);
const root = document.getElementById('root')!;

createRoot(root).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
