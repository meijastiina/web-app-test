import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() =>{
    axios.get('https://web-app-test-backend-fxbpcaevggh8hnc0.germanywestcentral-01.azurewebsites.net/api/message')
    .then(response => {
      setMessage(response.data.message);
    })
    .catch(error => {
      console.error(error);
    })
  }, []);
  return (
    <div className="App">
      <h1>{ message }</h1>
    </div>
  );
}

export default App;
