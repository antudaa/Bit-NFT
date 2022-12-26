import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../../Layouts/Main/Main';
import Error from '../../ErrorPage/Error';
import Home from '../../Home/Home';
import Login from '../../Login/Login';
import SignUp from '../../SignUp/SignUp';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            }
        ]
    },
    {
        path: '*',
        element: <Error />
    }
])

export default router;