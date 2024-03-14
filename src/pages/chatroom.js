import React, { useState, useEffect } from 'react';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  useEffect(() => {
    async function getWalletAddress() {
      if (window.ethereum) {
        // Request access to MetaMask accounts
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
        }
      }
    }

    getWalletAddress();
  }, []);

  const sendMessage = () => {
    if (inputMessage.trim() !== '') {
      const newMessage = {
        sender: walletAddress !== '' ? walletAddress : 'User',
        content: inputMessage.trim(),
      };
      setMessages([...messages, newMessage]);
      setInputMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div>
      <div className="messages-container" style={{ backgroundColor: "#333", padding: "10px", marginBottom: "10px", borderRadius: "8px" }}>
        <h1 data-aos-delay={500} data-aos="fade-up" className="text-white font-semibold flex rowdies-regular items-center text-xl gap-1 uppercase glow-text1 mb-10">YOUR ANONYMOUS CHATS HERE</h1>
        {messages.map((message, index) => (
          <div key={index} className="message font-[Oswald] tracking-widest" style={{ color: "white", marginBottom: "15px", marginRight: "15px" }}>
            <span style={{ marginRight: "2px" }} className="sender">{message.sender} :</span> {message.content}
          </div>
        ))}
      </div>
      <div className="input-container black-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <input
          type="text"
          className='font-[Oswald]'
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress} // Call handleKeyPress function on key press
          placeholder="Type your message..."
          style={{ padding: "10px", marginRight: "15px", borderRadius: "8px", width: "500px" }}
        />
        <button className='glowy font-[Oswald] tracking-wider text-xl' style={{ color: "black", backgroundColor: "#ee8650", border: "none", padding: "8px 30px", borderRadius: "5px" }} onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatRoom;
