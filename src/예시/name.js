import React, { Component, useState } from 'react';


function App() {
  const [names, setNames] = useState(["홍길동", "김민수"]);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleUpload = (e) => {
    setNames((prevState) => {
      return([input]);
    });
  }

  return (
  <div>
    <input type="text" value={input} onChange={handleInputChange}/>
    <button onClick={handleUpload}>Upload</button>
    {names.map((name, idx) => {
      return <p key={idx}>{name}</p>
    })}
  </div>
  );
}
export default App;
