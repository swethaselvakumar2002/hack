import React, { useState } from 'react';
import { sendMessage } from '../api';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('');

  const handleSendMessage = async () => {
    const response = await sendMessage(message);
    setReply(response.data.reply);
  };

  return (
    <div>
      <h2>Chat</h2>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={handleSendMessage}>Send</button>
      <p>Reply: {reply}</p>
    </div>
  );
};

export default Chat;
