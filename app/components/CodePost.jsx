'use client'
import 'highlight.js/styles/github-dark.css';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const CodePost = ({data}) => {
  return (
    <SyntaxHighlighter language={data.language}>
        {data.code}
    </SyntaxHighlighter>
  )
}

export default CodePost