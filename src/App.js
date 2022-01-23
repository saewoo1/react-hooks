import React, { useEffect, useRef, useState, useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Page from './component/Page';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{isDark, setIsDark}}> 
      <Page />
    </ThemeContext.Provider>
  ); // ThemeContext로 감싸는 모든 하위 컴포넌트들은 value 값들에 접근할 수 있다.
}
export default App;
