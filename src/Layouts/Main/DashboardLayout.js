import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../../Pages/Shared/Header/Header';
import Badge from './DashboardLayoutDesign/Badge/Badge';
import SideBar from './DashboardLayoutDesign/SideBar/SideBar';

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
                    <div className="menu p-4 w-80 bg-base-100 text-base-content">
                        <SideBar />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;