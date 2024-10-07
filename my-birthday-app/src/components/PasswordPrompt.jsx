import React, { useState } from 'react';
import './PasswordPrompt.css';


const PasswordPrompt = ({ onAccessGranted }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const correctPassword = process.env.REACT_APP_SITE_PASSWORD; 

    if (password === correctPassword) {

      onAccessGranted();
    } else {

      setError('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="password-prompt">
      <form onSubmit={handlePasswordSubmit}>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default PasswordPrompt;
