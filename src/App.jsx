import { useState } from 'react';
import BoxDisplay from './components/BoxDisplay';
import BoxGenerator from './components/BoxGenerator';

function App() {
  const [currentBoxes, setCurrentBoxes] = useState([]);
  const onNewBox = (newBox) => {
    setCurrentBoxes([...currentBoxes, newBox]);
  }
  return (
    <>
      <BoxGenerator onNewBox={onNewBox} />
      <BoxDisplay currentBoxes={currentBoxes} />
    </>
  );
}

export default App;