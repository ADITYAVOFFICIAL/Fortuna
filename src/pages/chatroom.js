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
        
      <div className="messages-container" style={{ backgroundColor: "#333", padding: "10px", marginBottom: "10px" ,borderRadius:"8px"}}>
      <h1 data-aos-delay={500} data-aos="fade-up" className="text-white font-semibold flex rowdies-regular items-center text-xl gap-1 uppercase glow-text1 mb-10">YOUR ANONYMOUS CHATS HERE</h1>
        {messages.map((message, index) => (
          <div key={index} className="message font-[Oswald] tracking-widest" style={{ color: "white", marginBottom: "5px" }}>
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
          style={{ padding: "5px", marginRight: "5px" ,borderRadius:"8px"}}
        />
        <button className='glowy font-[Oswald] tracking-wider' style={{ color: "black", backgroundColor: "#ee8650", border: "none", padding: "5px 10px", borderRadius: "5px" }} onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatRoom;
