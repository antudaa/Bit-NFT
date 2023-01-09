import React from 'react';
import './FlipCard.css';


const FlipCard = ({ member, handleDelete }) => {

    const { email, name, profilePhoto, purpose, status, _id } = member;


    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img className='img' src={profilePhoto} alt="Avatar" />
                </div>
                <div className="flip-card-back">
                    <h1>{name}</h1>
                    <p>{status}</p>
                    <p>{purpose}</p>
                    <p>{email}</p>
                    <button className='btn btn-outline text-white my-8' onClick={() => handleDelete(_id)}>BAN MEMBER</button>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;