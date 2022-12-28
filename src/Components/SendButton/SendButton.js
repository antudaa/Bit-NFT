import React from 'react';
import './SendButton.css'


const SendButton = ({ text }) => {
    return (
        <button>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {text}
        </button>
    );
};

export default SendButton;