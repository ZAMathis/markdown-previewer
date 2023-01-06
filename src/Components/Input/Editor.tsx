import { FC, useState } from "react"
import { EditorProps } from "../../utility/Interface"
import { defaultString } from "../../utility/defaultString"

const Editor:FC<EditorProps> = ({setInput}) => {
    const [val, setVal] = useState(defaultString)

    const handleChange = (e: any) => {
        setInput(e.target.value);
        setVal(e.target.value);
      }

    return <textarea id="editor" onChange={handleChange} value={val} ></textarea>
}

export default Editor;