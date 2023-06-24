import React, { useEffect, useState } from 'react';

const Profile = ({ user }) => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    if (user) {
      // Send GET request to fetch profile data
      fetch(`https://dummyjson.com/users/${user.id}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Failed to fetch profile data');
          }
        })
        .then(profile => {
          setProfileData(profile); // Save the profile data in state
        })
        .catch(error => {
          console.error('Profile fetch error:', error);
        });
    }
  }, [user]);

  return (
    <div className='profile-div'>
      <h2>Profile</h2>
      {profileData ? (
        <div>
          <p>ID: {profileData.id}</p>
          <p>Name: {profileData.name}</p>
          <p>Email: {profileData.email}</p>
          {/* Display other profile data as needed */}
        </div>
      ) : (
        <p>Loading profile data...</p>
      )}
    </div>
  );
};

export default Profile;