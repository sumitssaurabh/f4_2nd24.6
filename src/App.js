import React, { useState } from 'react';
import Login from './Login';
import Profile from './Profile';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setUser(user); // Save the user object in state
  };

  return (
    <div className='body'>
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Profile user={user} />
      )}
    </div>
  );
};

export default App;