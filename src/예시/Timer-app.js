import React, { useEffect, useState } from 'react';
import Timer from './component/Timer';

function App() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      {showTimer && <Timer />} 
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  );
} // showTimer가 true일 때만 Timer를 보여준다
export default App;
