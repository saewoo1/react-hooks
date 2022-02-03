import React, { useState, useMemo, useEffect } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // const location = {
  //   country: isKorea ? '한국' : '외국',
  // }; // re render를 하면 다른 메모리 상의 공간에 할당된거다!!! 새로운 주소의 obj임!!

  const location = useMemo(() => {
    return {
      country: isKorea ? '한국' : '외국',
    }
  }, [isKorea]); // 이제 이렇게 하면 number는 초기화에 관여하지 않는다!!
  
  useEffect (() => {
    console.log("useEffect 호출")
  }, [location]);

  return (
    <div>
      <h2>하루에 몇끼 먹어요?</h2>
      <input 
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <hr />
      <h2>어느 나라에 있어요?</h2>
      <p>나라: {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}> 비행기 타자 </button>
    </div>
  );
}

export default App;