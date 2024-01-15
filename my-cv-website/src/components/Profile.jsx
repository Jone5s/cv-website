import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-text">
        <p>I'm a 23-year old third year ICT-engineering student at TAMK. 
        I'm a calm, hard-working and diligent person.
        I have work experience at customer service and desk job positions. I'm precise and patient in my work. 
        I am technically competent and have experience with many different software 
        development techniques and office software. I very much enjoy programming & software development, I find it very fulfilling and satisfying.</p>
      </div>
      <div className="profile-photo">
        <img src="./pick.jpg" alt="Your Photo" />
      </div>
    </div>
  );
};

export default Profile;