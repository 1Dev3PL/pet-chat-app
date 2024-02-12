import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './components/login/LoginPage'
import { createTheme, ThemeProvider } from '@mui/material'
import RegistrationPage from './components/registration/RegistrationPage'

const router = createBrowserRouter([{
        path: '/',
        element: <App />,
    }, {
        path: '/login',
        element: <LoginPage />,
    }, {
        path: '/signup',
        element: <RegistrationPage />,
    }],
)

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>,
)
