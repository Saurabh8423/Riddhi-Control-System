import React, { useState } from 'react';
import './Chatbot.css';
import api from '../../api/api';

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState('');
  const [sent, setSent] = useState(false);

  const send = async () => {
    if (!msg) return;
    try {
      await api.post('/chat/send', { message: msg, name: 'Guest' });
      setSent(true);
      setMsg('');
      setTimeout(() => setSent(false), 3000);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div className="chatbot-button" onClick={() => setOpen(!open)}>
        💬
      </div>

      {open && (
        <div className="chatbot-panel">
          <div className="chatbot-header">
            Chat with us
            <button className="chatbot-close" onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="chatbot-body">
            {sent ? (
              <div className="chatbot-sent">Message sent — admin will respond soon</div>
            ) : (
              <>
                <textarea
                  className="chatbot-textarea"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder="Type your message..."
                />

                <button className="chatbot-send" onClick={send}>Send</button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
