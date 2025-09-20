import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Homepage from './pages/Homepage';
import NavBar from './components/NavBar';

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            Component: NavBar,
            children: [
                { index: true, element: <Homepage /> }
            ]
        }
    ])

    return (
        <RouterProvider router={router} />
    );
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
