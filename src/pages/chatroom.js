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
      <div className="messages-container" style={{ backgroundColor: "#333", padding: "10px", marginBottom: "10px" }}>
        {messages.map((message, index) => (
          <div key={index} className="message" style={{ color: "white", marginBottom: "5px" }}>
            <span className="sender">{message.sender}:</span> {message.content}
          </div>
        ))}
      </div>
      <div className="input-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
          style={{ padding: "5px", marginRight: "5px" }}
        />
        <button style={{ color: "white", backgroundColor: "#007bff", border: "none", padding: "5px 10px", borderRadius: "5px" }} onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatRoom;
