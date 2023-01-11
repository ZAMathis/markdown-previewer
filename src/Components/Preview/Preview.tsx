import { FC } from "react";
import { PreviewProps } from "../../utility/Interface";
import Markdown from 'marked-react';

const Preview: FC<PreviewProps> = ({input}) => {
    return (
        <div id="prev-container"
        style={{height: `${input.length}rm`}}>
            <div id="preview"
            
            >
                <Markdown>{input}</Markdown>
            </div>
        </div>
    )
}

export default Preview