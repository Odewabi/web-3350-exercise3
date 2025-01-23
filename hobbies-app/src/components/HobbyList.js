import React from 'react';
import './HobbyList.css';

const HobbyList = ({ hobbies }) => {
  if (hobbies.length === 0) {
    return <p>No hobbies added yet. Start by adding one!</p>;
  }

  return (
    <ul className="hobbies-list">
      {hobbies.map((hobby, index) => (
        <li key={index}>{hobby}</li>
      ))}
    </ul>
  );
};

export default HobbyList;