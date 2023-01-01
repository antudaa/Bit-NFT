import React, { useEffect } from 'react';

const DynamicRouteHook = (title) => {
    useEffect(() => {
        document.title = `${title}-Bit NFT`;
    }, [title]);
};

export default DynamicRouteHook;