import React from 'react';
import './MemberCardNew.css'; // Import the CSS file for styling

const MemberCardNew = ({ name, role, imagePath, bio }) => {
    return (
        <div className='card-container'>
            <div className="card">
                <div className="front">
                    <img className="card-image" src={imagePath} alt={name} />
                    <div className="card-info">
                        <h2 className="name">{name}</h2>
                        <p className="role">{role}</p>
                    </div>
                </div>
                <div className="back">
                    <p className="bio">{bio}</p>
                </div>
            </div>
        </div>
    );
};

export default MemberCardNew;
