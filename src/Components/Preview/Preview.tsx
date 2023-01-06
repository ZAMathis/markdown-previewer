import { FC } from "react";
import { PreviewProps } from "../../utility/Interface";
import Markdown from 'marked-react';

const Preview: FC<PreviewProps> = ({input}) => {
    return (
        <div id="preview">
            <Markdown>{input}</Markdown>
        </div>
    )
}

export default Preview