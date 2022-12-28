import React,{ useState } from 'react';
import UseState from './components/UseState';

export const ToggleTheme = React.createContext()

function App() {

  const [state,setState] = useState(true)

  const handleToggle = ()=>{
    setState(state=>!state)
  }

  return (
    <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
      <UseState />
    </ToggleTheme.Provider>
  );
}

export default App;