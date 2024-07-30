import React, { useState } from 'react';
import axios from 'axios';

function Chatbot() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const handleSend = async () => {
    setChat([...chat, { text: message, type: 'user' }]);
    setMessage('');
    
    try {
      const response = await axios.post('/api/chat', { message });
      setChat([...chat, { text: message, type: 'user' }, { text: response.data.reply, type: 'bot' }]);
    } catch (error) {
      setChat([...chat, { text: message, type: 'user' }, { text: 'Error getting response', type: 'bot' }]);
    }
  };

  return (
    <div>
      <div className="chatbox">
        {chat.map((msg, index) => (
          <div key={index} className={msg.type}>
            {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default Chatbot;
