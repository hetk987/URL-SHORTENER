import { useState } from 'react';
import './App.css';
import BackgroundAnimation from './BackgroundAnimation';
import InputURL from './InputURL';
import LinkResult from './LinkResult';

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div >
      <InputURL setInputValue={setInputValue} />
      <BackgroundAnimation />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;