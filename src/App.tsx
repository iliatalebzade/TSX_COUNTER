import { FC, useState } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Count from './components/Count';



const App: FC = () => {

  const [counterVal, setCounterVal] = useState<number>(0)

  return (
    <div className="App">
      <Count count={counterVal} />
      <Buttons
        counterVal={counterVal}
        setCounterVal={setCounterVal}
      />
    </div>
  );
}

export default App;
