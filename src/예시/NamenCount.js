import React, { useEffect, useState } from 'react';


function App() {
  const[count, setCount] = useState(1);
  const[name, setName] = useState('');

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value)
  }

  //렌더링 될 때마다 매번 실행됨
  //마운트 + [item] 변경될 때마다 실행
  useEffect (() => {
    console.log('렌더링맨~')
  })

 //마운트 + [item] 변경될 때마다 실행
 useEffect (() => {
  console.log('숫자 렌더링맨~')
},[count])

 //마운트 + [item] 변경될 때마다 실행
 useEffect (() => {
  console.log(' 이름!!!!렌더링맨~')
},[name])

  return (
    <div>
      <button onClick={handleCount}>Update</button>
      <span>count: {count}</span>
      <input type="text" value={name} onChange={handleInputChange}></input>
      <span>name: {name}</span>
    </div>
  );
}
export default App;
