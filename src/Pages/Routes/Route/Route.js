import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../../Layouts/Main/DashboardLayout';
import Main from '../../../Layouts/Main/Main';
import About from '../../About/About';
import AdminDashBoard from '../../AdminDashBoard/AdminDashBoard';
import MembershipRequest from '../../AdminDashBoard/MembershipRequest/MembershipRequest';
import ProfileSection from '../../AdminDashBoard/ProfileSection/ProfileSection';
import WeatherApp from '../../AdminDashBoard/WeatherApp/WeatherApp';
import Blog from '../../Blog/Blog';
import Contact from '../../Contact/Contact';
import Error from '../../ErrorPage/Error';
import HomePage from '../../Home/HomePage/HomePage';
import Login from '../../Login/Login';
import SignUp from '../../SignUp/SignUp';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/blog',
                element: <Blog />
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
        path: '/adminDashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/adminDashboard',
                element: <AdminDashBoard></AdminDashBoard>
            },
            {
                path: '/adminDashboard/membershipRequest',
                element: <MembershipRequest></MembershipRequest>
            },
            {
                path: '/adminDashboard/profileSection',
                element: <ProfileSection />
            },
            {
                path: '/adminDashboard/weather',
                element: <WeatherApp />
            }
        ]
    },
    {
        path: '*',
        element: <Error />
    }
])

export default router;