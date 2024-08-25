// src/components/UserProfile.jsx
import React, { useContext } from 'react';
import UserContext from '../UserContext'; // Adjust the path if necessary

const UserProfile = () => {
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Age: {userData.age}</p>
      <p>Bio: {userData.bio}</p>
    </div>
  );
};

export default UserProfile;
