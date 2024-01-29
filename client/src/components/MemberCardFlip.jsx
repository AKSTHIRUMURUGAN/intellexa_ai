import React from 'react';
import './MemberCardFlip.css'; // Make sure to create and import the corresponding CSS

const MemberCardFlip = ({ member }) => {
  const { imgSrc, name, position, bio } = member;

  return (
    <div className="maincontainer">
      <div className="thecard">
        <div className="thefront">
          <img src={imgSrc} alt={name} className="card-image" />
        </div>
        <div className="theback">
          <h1>{name}</h1>
          <p>{position}</p>
          <p>{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default MemberCardFlip;
