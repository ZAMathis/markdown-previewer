const inlineCode:string = '`or maybe some inline code`'

const codeBlock:string = "``` \nfunction md(){ \n\tconsole.log('Three backticks for a code block!'); \n} \n```"

export const defaultString:string = `
# Enter your Markdown Here

## And see it appear on the left

You can also use [links](https://github.com/ZAMathis)

${inlineCode}

${codeBlock}

- There is also lists
	- This one is bulleted

1. But they can also be
1. Numbered as well
1. Even just using 1s!

> You can make a block quote!

**Maybe even with bold text**

_Or italic_?

**_Or Both!_**

You can also use images! ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`