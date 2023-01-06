import { FC } from "react"
import { EditorProps } from "../../utility/Interface"

const Editor:FC<EditorProps> = ({setInput}) => {

    const handleChange = (e: any) => {
        setInput(e.target.value);
      }

    return <textarea id="editor" onChange={handleChange}></textarea>
}

export default Editor;