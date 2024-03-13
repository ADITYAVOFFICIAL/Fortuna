import { useState } from 'react';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const sendMessage = () => {
    if (inputMessage.trim() !== '') {
      const newMessage = {
        sender: 'User',
        content: inputMessage.trim(),
      };
      setMessages([...messages, newMessage]);
      setInputMessage('');
    }
  };

  return (
    <div>
      <div className="messages-container">
        {messages.map((message, index) => (
          <div style={{color:"white"}} key={index} className="message">
            <span style={{color:"white"}} className="sender">{message.sender}:</span> {message.content}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button style={{color:"white"}} onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatRoom;
