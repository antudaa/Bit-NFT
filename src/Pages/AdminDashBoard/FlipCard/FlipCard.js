import React from 'react';
import './FlipCard.css';


const FlipCard = () => {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img className='img' src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
                </div>
                <div className="flip-card-back">
                    <h1>John Doe</h1>
                    <p>Architect & Engineer</p>
                    <p>We love that guy</p>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;