import React from 'react';
import LoadingAnimationLottie from '../../LoadingAnimationLottie.json';
import Lottie from 'react-lottie';

const Loading = () => {

    // Lottie animation Default Option
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: LoadingAnimationLottie,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        }
    };

    return (
        <div>
            <Lottie options={defaultOptions}
                height={400}
                width={400} />
        </div>
    );
};

export default Loading;