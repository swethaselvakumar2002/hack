import React, { useState } from 'react';
import { runCode } from '../api';

const CodeEditor = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const handleRunCode = async () => {
    const response = await runCode(code);
    setOutput(response.data.output);
  };

  return (
    <div>
      <h2>Code Editor</h2>
      <textarea value={code} onChange={(e) => setCode(e.target.value)}></textarea>
      <button onClick={handleRunCode}>Run Code</button>
      <pre>{output}</pre>
    </div>
  );
};

export default CodeEditor;
