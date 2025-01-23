import React, { useState } from 'react';
import HobbyList from "./components/HobbyList";
import HobbyForm from "./components/HobbyForm";
import './App.css';

const App = () => {
  const [hobbies, setHobbies] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const addHobbyHandler = (newHobby) => {
    setHobbies((prevHobbies) => [...prevHobbies, newHobby]);
  };

  return (
    <div className="app">
      {showForm ? (
        <HobbyForm
          onAddHobby={addHobbyHandler}
          onCancel={() => setShowForm(false)}
        />
      ) : (
        <button onClick={() => setShowForm(true)}>Add Hobby</button>
      )}
      <HobbyList hobbies={hobbies} />
    </div>
  );
};

export default App;

