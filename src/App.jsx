import { useState } from 'react';
import './App.css'
import { ProgressBar } from './ProgressBar';

function App() {

  const [progress,setProgress] = useState(0);
  function updateProgress() {
    if (progress < 100){
      setProgress(progress => progress + 10);
    }
  }

  return (
    <>
        <ProgressBar  progress={progress}/>
        <button onClick={updateProgress} >Increase Progress</button>
    </>

  );
}

export default App
