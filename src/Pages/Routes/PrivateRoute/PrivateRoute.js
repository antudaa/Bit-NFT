import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import LoadingAnimationLottie from '../../../LoadingAnimationLottie.json';
import Lottie from 'react-lottie';

const PrivateRoute = ({ children }) => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: LoadingAnimationLottie,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        }
    };

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div>
            <Lottie options={defaultOptions}
                height={400}
                width={400} />
        </div>

    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;