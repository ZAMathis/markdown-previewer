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
      <header>
        <h1>Markdown Previewer</h1>
      </header>
      <hr />
      <main className='container'>
        <Editor setInput={setInput} />
        <Preview input={input} />
      </main>
      <section className='how-to'>
        <h2>How to write Markdown:</h2>
        <div className="tutorial-container">
          <div className="tutorial-point">
            <p>The pound symbol '#' is used to denote a header. Can be used from 1-6.</p>
          </div>
          <div className="tutorial-point alt-bg">
            <p>You can use links with brackets '[]' substituting for the anchor text, and the link in parethesis (https://google.com)</p>
          </div>
          <div className="tutorial-point ">
            <p>You can use ticks '`' for code, 1 tick for a line of code, and 3 ticks for a block of code</p>
          </div>
          <div className="tutorial-point alt-bg">
            <p>You can use dashes '-' or numbers appended with a period '1.' to make a list</p>
          </div>
          <div className="tutorial-point">
            <p>You can use the greater-than sign '{'>'}' to create a block quote</p>
          </div>
          <div className="tutorial-point alt-bg">
            <p>Use double asterisks '**' around a word '**bold**' to create bold text</p>
          </div>
          <div className="tutorial-point">
            <p>Or, using the same method, replace the '**' with a underscore '_' to create italic text</p>
          </div>
          <div className="tutorial-point alt-bg">
            <p>You can also '**_Combine them_**</p>
          </div>
          <div className="tutorial-point">
            <p>You can create an image, using an exclamation point '!' followed by brackets containting alt text '[alt text]' and then the link to the image in parenthesis '(./img.png)' <br /> for example: ![alt text](./linktoimage.png)</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
