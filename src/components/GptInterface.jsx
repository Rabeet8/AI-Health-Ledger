import React, { useState } from 'react';
import './Gpt.css';

const GptInterface = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim() === '') return;
    
    // Add the user message to the list of messages
    setMessages([...messages, { text: input, type: 'user' }]);
    setInput('');

    // Simulate a response from GPT-3 (you can replace this with actual GPT-3 integration)
    setTimeout(() => {
      setMessages([...messages, { text: 'This is a response from GPT-3.', type: 'bot' }]);
    }, 1000);
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`chat-message ${message.type}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={handleInputChange}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default GptInterface;
