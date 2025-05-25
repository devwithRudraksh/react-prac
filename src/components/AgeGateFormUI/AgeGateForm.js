// src/components/AgeGateForm.js

import React, { useState } from 'react';
import './AgeGateForm.css'; // for styling

export default function AgeGateForm() {
  const [age, setAge] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="form-container"> 
      <h2>🔞 Age Verification</h2>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
          <button type="submit">Check Access</button>
        </form>
      ) : age >= 18 ? (
        <div className="welcome">
          <h3>✅ Access Granted</h3>
          <p>Welcome to the adult section!</p>
        </div>
      ) : (
        <div className="denied">
          <h3>⛔ Access Denied</h3>
          <p>You must be 18 or older to continue.</p>
        </div>
      )}
    </div>
  );
}
