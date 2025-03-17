import React from 'react';

function App() {
  const userInput = "<img src=x onerror=alert('XSS') />";
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: userInput }} />
    </div>
  );
}

export default App;
