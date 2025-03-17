import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [displayMessage, setDisplayMessage] = useState('');
  const [host, setHost] = useState('');
  const [username, setUsername] = useState('');
  
  // Deliberate XSS vulnerability
  const handleSubmit = () => {
    setDisplayMessage(message);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Secure DevOps Demo</h1>
      </header>
      
      <div className="container">
        <h2>Message Echo</h2>
        <input 
          type="text" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          placeholder="Enter a message" 
        />
        <button onClick={handleSubmit}>Submit</button>
        
        {/* Deliberate XSS vulnerability */}
        {displayMessage && (
          <div dangerouslySetInnerHTML={{ __html: displayMessage }} />
        )}
        
        <h2>User Search</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />
        
        <h2>Network Ping</h2>
        <input
          type="text"
          value={host}
          onChange={(e) => setHost(e.target.value)}
          placeholder="Enter hostname"
        />
      </div>
    </div>
  );
}

export default App;