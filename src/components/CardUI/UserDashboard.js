// src/components/UserDashboard.js

import React from 'react';
import UserCard from './UserCard';

export default function UserDashboard() {
  const users = [
    { id: 1, name: "Alice", age: 24, email: "alice@example.com" },
    { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
    { id: 3, name: "Charlie", age: 28, email: "charlie@example.com" }
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {users.map(x => (
        <UserCard
          key={x.id}
          name={x.name}
          age={x.age}
          email={x.email}
        />
      ))}
    </div>
  );
}
