import React, { useState, useMemo } from 'react';

const hardCalculate = (number) => {
  console.log('계산이유');

  for (let i = 0; i < 999999999; i++) {}
  return number + 10000;
}

const easyCalculate = (number) => {
  console.log('쉽다 쉬워');

  return number + 1;
}

function App() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

 // const hardSum = hardCalculate(hardNumber);
  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber)
  }, [hardNumber]);
  const easySum = easyCalculate(easyNumber);

  return (
    <div>
      <h3>어려븐 계산기</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span> + 10000 = {hardSum}</span>

      <h3>쉬운 계산기</h3>
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />
      <span> + 1 = {easySum}</span>
    </div>
  );
}

//함수형 컴포넌트라서 .. easyNum이 바뀌어도 렌더링이 일어나고, hardNum도 호출하게 된다.
//이제 useMemo를 사용하면 easyCal의 값이 바뀌었을 땐 빨리 빨리 잘 된다! -> 어려운 계산 실행 X

export default App;