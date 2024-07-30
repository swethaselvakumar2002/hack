import React, { useState } from 'react';
import CodeEditor from './CodeEditor';
import axios from 'axios';

function CodeExecution() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const handleRunCode = async () => {
    try {
      const response = await axios.post('/api/code/execute', { code });
      setOutput(response.data.output);
    } catch (error) {
      setOutput('Error executing code');
    }
  };

  return (
    <div>
      <CodeEditor code={code} onCodeChange={setCode} />
      <button onClick={handleRunCode}>Run Code</button>
      <pre>{output}</pre>
    </div>
  );
}

export default CodeExecution;
