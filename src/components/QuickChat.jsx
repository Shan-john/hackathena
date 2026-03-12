import React, { useState } from 'react';

const MESSAGES = [
  { emoji: '👋', text: 'Hello!' },
  { emoji: '👀', text: 'Look here!' },
  { emoji: '🚶', text: 'Follow me!' },
  { emoji: '🆘', text: 'Help me!' },
  { emoji: '🏗️', text: "Let's build!" },
  { emoji: '🎉', text: 'Good job!' },
  { emoji: '🙏', text: 'Thank you!' },
  { emoji: '🤩', text: 'Wow, beautiful!' },
];

export default function QuickChat({ onSend }) {
  const [open, setOpen] = useState(false);

  const handleSend = (msg) => {
    onSend(msg);
    setOpen(false);
  };

  return (
    <div className="quick-chat">
      {open && (
        <div className="chat-messages-grid" role="menu" aria-label="Quick chat messages">
          {MESSAGES.map((msg, i) => (
            <button
              key={i}
              className="chat-msg-btn"
              onClick={() => handleSend(msg)}
              role="menuitem"
              aria-label={msg.text}
            >
              <span>{msg.emoji}</span> {msg.text}
            </button>
          ))}
        </div>
      )}
      <button
        className="chat-toggle-btn"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close chat' : 'Open quick chat'}
        title="Quick Chat"
      >
        💬
      </button>
    </div>
  );
}
