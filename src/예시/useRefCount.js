import { render } from '@testing-library/react';
import React, { useEffect, useRef, useState } from 'react';


const App = () => {
  const [count, setCount] = useState(1);
  const [renderCounter, setRenderCounter] = useState(0);
  // const renderCount = useRef(0);

  // useEffect(() => {
  //   setRenderCounter(renderCounter+ 1);
  //   console.log("렌더링 수", renderCounter);
  // }, [renderCounter])
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>올려!</button>
    </div>
  );
};
export default App;
//기존 React에서 State가 변화한다 -> component를 다시 불러온다 -> 함수형이니까 재호출한다