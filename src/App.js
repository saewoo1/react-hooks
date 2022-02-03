import React, { useState } from 'react';

const hardCalculate = (number) => {
  console.log('계산이유');

  for (let i = 0; i < 999999999; i++) {}
  return number + 10000;
}

function App() {
  const [hardNumber, setHardNumber] = useState(1);

  const hardSum = hardCalculate(hardNumber);

  return (
    <div>
      <h3>어려븐 계산기</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span> + 10000 = {hardSum}</span>
    </div>
  );
}

export default App;