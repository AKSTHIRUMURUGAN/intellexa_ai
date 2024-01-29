import React from 'react';
import './ProfileCard.css'; // Assuming you move the CSS to a separate file

const ProfileCard = ({ imgSrc, name, role }) => {
  return (
    <div className="profile-card">
      <div className="img">
        <img src={imgSrc} alt={name} />
      </div>
      <div className="caption">
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
