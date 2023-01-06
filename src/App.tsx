import { FC, useState } from 'react';
import { defaultString } from './utility/defaultString';
import Markdown from 'marked-react';
import Editor from './Components/Input/Editor';
import Preview from './Components/Preview/Preview';
import './App.css';

const App: FC = () => {
  const [input, setInput] = useState(defaultString);

  return (
    <div className="App">
      <Editor setInput={setInput} />
      <Preview input={input} />
    </div>
  );
}

export default App;
