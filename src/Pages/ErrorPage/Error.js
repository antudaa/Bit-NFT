import React from 'react';
import Lottie from 'react-lottie';
import DynamicRouteHook from '../../Components/DynamicRouteHook/DynamicRouteHook';
import LottieErrorAnimation from '../../LottieErrorAnimation.json';


const Error = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: LottieErrorAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        }
    };

    DynamicRouteHook('Error');

    return (
        <div className='my-24'>
            <Lottie options={defaultOptions}
                height={400}
                width={400} />
        </div>
    );
};

export default Error;