import React, { useEffect } from 'react';
import { themeChange } from 'theme-change';

const ThemeChanger = () => {

    const themeValues = [
        "light",
        "dark",
        "cupcake",
        "corporate",
        "fantasy",
        "luxury",
        "autumn",
        "lemonade",
        "night",
        "coffee",
        "winter"
    ]
    useEffect(() => {
        themeChange(false)
    }, []);

    return (
        <>
            <select className='text-primary text-center rounded-xl' data-choose-theme>
                <option className='text-primary' option="" value="">Default Value</option>
                {
                    themeValues.map((value, i) => (
                        <option className='text-primary' key={i} value={value.toLowerCase()}>{value}</option>
                    ))
                }

            </select>
        </>
    );
};

export default ThemeChanger;