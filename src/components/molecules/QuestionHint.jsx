import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const QuestionHint = ({
    children, language="python"
}) => {
  return (  
    <SyntaxHighlighter language={language}style={dark}>
      {children}   
    </SyntaxHighlighter>  
  );
};
export default QuestionHint;