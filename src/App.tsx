import { FC, useState } from 'react';
import { defaultString } from './utility/defaultString';
import Editor from './Components/Input/Editor';
import Preview from './Components/Preview/Preview';
import './App.css';

const App: FC = () => {
  const [input, setInput] = useState(defaultString);  

  console.log(input.length);

  return (
    <div className="App">
      <div className='container'>
        
        <Editor setInput={setInput} />
        <Preview input={input} />
      </div>
    </div>
  );
}

export default App;
