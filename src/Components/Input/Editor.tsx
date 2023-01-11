import { FC, useState} from "react"
import { EditorProps } from "../../utility/Interface"
import { defaultString } from "../../utility/defaultString"

const Editor:FC<EditorProps> = ({setInput}) => {
    const [val, setVal] = useState(defaultString);
    const [height, setHeight] = useState(200);

    const handleChange = (e: any) => {
        setInput(e.target.value);
        setVal(e.target.value);
        console.log(val.length);
      }

    return <textarea 
    id="editor" 
    onChange={handleChange} 
    value={val} 
    style={{height: `${height}px`}}
    placeholder="Type here"
    ></textarea>
}

export default Editor;