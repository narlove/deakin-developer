import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Homepage from './pages/Homepage';
import NavBar from './components/NavBar';
import RegisterPage from './pages/Register';
import ForYouPage from './pages/ForYou';
import LoginPage from './pages/Login';
import ProfilesPage from './pages/Profiles';

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            Component: NavBar,
            children: [
                { index: true, element: <Homepage /> },
                { path: "/for-you", element: <ForYouPage />},
                { path: "/login", element: <LoginPage /> },
                { path: "/register", element: <RegisterPage /> },
                { path: "/profiles", element: <ProfilesPage /> }
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
