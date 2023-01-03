import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../../Pages/Shared/Header/Header';

const DashboardLayout = () => {
    return (
        <div>
            <Header className='shadow-xl'></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-side-navbar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet />
                </div>
                <div className="drawer-side shadow-xl">
                    <label htmlFor="dashboard-side-navbar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><Link to='/adminDashboard/membershipRequest'>Membership Request</Link></li>
                        <li><Link to=''>Page Rich</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;