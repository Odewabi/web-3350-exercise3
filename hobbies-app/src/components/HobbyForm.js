import React, { useState } from 'react';
import './HobbyForm.css';

const HobbyForm = ({ onAddHobby, onCancel }) => {
  const [enteredHobby, setEnteredHobby] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (enteredHobby.trim() === "") {
      setIsInvalid(true);
      return;
    }
    onAddHobby(enteredHobby.trim());
    setEnteredHobby("");
    setIsInvalid(false);
  };

  return (
    <form onSubmit={submitHandler} className="hobbies-form">
      <div className={`form-control ${isInvalid ? "invalid" : ""}`}>
        <label>Hobby</label>
        <input
          type="text"
          value={enteredHobby}
          onChange={(e) => setEnteredHobby(e.target.value)}
        />
        {isInvalid && <p className="error-text">Please enter a valid hobby!</p>}
      </div>
      <div className="form-actions">
        <button type="submit">Add Hobby</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default HobbyForm;
