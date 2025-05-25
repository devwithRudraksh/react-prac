import React from 'react';
import './UserCard.css'; // for styling (optional)

export default function UserCard({ name, age, email }) {
  console.log("UserCard Rendered:", name);

  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}
