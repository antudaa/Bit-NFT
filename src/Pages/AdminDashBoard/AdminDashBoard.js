import React from 'react';
import Lottie from 'react-lottie';
import { Link, Outlet } from 'react-router-dom';
import LoadingAnimationLottie from '../../LoadingAnimationLottie.json';

const AdminDashBoard = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: LoadingAnimationLottie,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div>
            <h1 className='my-10 text-4xl text-center'>Admin Dashboard</h1>
            <Lottie options={defaultOptions}
                height={400}
                width={400} />
        </div>
    );
};

export default AdminDashBoard;