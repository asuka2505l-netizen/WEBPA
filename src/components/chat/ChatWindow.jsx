import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { INITIAL_BOT_MESSAGE, processUserQuery } from '../../data/aiKnowledgeBase';
import CourtLogo from '../../assets/CourtLogo';
import {
  Send,
  Bot,
  User,
  RotateCcw,
  Sparkles,
  ExternalLink,
  ArrowRight,
  HelpCircle,
  MessageSquare,
  Check
} from 'lucide-react';

const STORAGE_KEY = "pa_bandung_chat_history_v1";

export default function ChatWindow({ isWidgetMode = false }) {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [INITIAL_BOT_MESSAGE];
      }
    }
    return [INITIAL_BOT_MESSAGE];
  });

  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      // Storage quota or error
    }
  }, [messages, isTyping]);

  const handleSend = (textToSend = null) => {
    const query = typeof textToSend === 'string' ? textToSend : inputVal;
    if (!query || !query.trim()) return;

    const userMsg = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (typeof textToSend !== 'string') {
      setInputVal('');
    }

    // Simulate AI thinking and typing response
    setIsTyping(true);
    setTimeout(() => {
      const botResponse = processUserQuery(query);
      const newBotMsg = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: botResponse.text,
        actionLink: botResponse.actionLink,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, newBotMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClearChat = () => {
    localStorage.removeItem(STORAGE_KEY);
    setMessages([INITIAL_BOT_MESSAGE]);
  };

  // Helper to format bot markdown text simply (bolding and linebreaks)
  const renderFormattedText = (text) => {
    const lines = text.split('\n');
    return lines.map((line, idx) => {
      // Simple regex replacement for **bold** text
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <React.Fragment key={idx}>
          {parts.map((part, pIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={pIdx}>{part.slice(2, -2)}</strong>;
            }
            return part;
          })}
          {idx < lines.length - 1 && <br />}
        </React.Fragment>
      );
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: isWidgetMode ? '520px' : '640px',
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        border: '1px solid #E2E8F0',
        boxShadow: 'var(--shadow-md)',
        overflow: 'hidden'
      }}
    >
      {/* Chat Window Header */}
      <div
        style={{
          backgroundColor: '#065F46',
          color: '#FFFFFF',
          padding: '1rem 1.25rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.06)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <CourtLogo size={26} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <h3 style={{ margin: 0, fontSize: '1rem', color: '#FFFFFF', fontWeight: 700 }}>
                Si-PANDU AI
              </h3>
              <span
                style={{
                  backgroundColor: '#10B981',
                  color: '#FFFFFF',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  padding: '0.15rem 0.45rem',
                  borderRadius: '20px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.2rem'
                }}
              >
                <Sparkles size={10} /> Online
              </span>
            </div>
            <span style={{ fontSize: '0.75rem', color: '#A7F3D0' }}>
              Asisten Virtual Pengadilan Agama Bandung Kelas 1A
            </span>
          </div>
        </div>

        {/* Clear chat button */}
        <button
          type="button"
          onClick={handleClearChat}
          title="Mulai percakapan baru"
          style={{
            background: 'rgba(255,255,255,0.12)',
            border: 'none',
            color: '#FFFFFF',
            padding: '0.4rem 0.75rem',
            borderRadius: '6px',
            fontSize: '0.75rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem'
          }}
        >
          <RotateCcw size={12} />
          <span>Reset</span>
        </button>
      </div>

      {/* Messages Scroll Area */}
      <div
        style={{
          flex: 1,
          padding: '1.25rem',
          overflowY: 'auto',
          backgroundColor: '#F8FAFC',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}
      >
        {messages.map((msg) => {
          const isBot = msg.sender === 'bot';
          return (
            <div
              key={msg.id}
              style={{
                display: 'flex',
                gap: '0.65rem',
                alignItems: 'flex-start',
                flexDirection: isBot ? 'row' : 'row-reverse',
                maxWidth: '88%',
                alignSelf: isBot ? 'flex-start' : 'flex-end'
              }}
            >
              {/* Avatar Icon */}
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: isBot ? '#065F46' : '#2563EB',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: '0.8rem',
                  marginTop: '2px'
                }}
              >
                {isBot ? <Bot size={18} /> : <User size={18} />}
              </div>

              {/* Message Bubble */}
              <div>
                <div
                  style={{
                    backgroundColor: isBot ? '#FFFFFF' : '#065F46',
                    color: isBot ? '#1E293B' : '#FFFFFF',
                    padding: '0.85rem 1.1rem',
                    borderRadius: isBot ? '4px 14px 14px 14px' : '14px 4px 14px 14px',
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                    border: isBot ? '1px solid #E2E8F0' : 'none',
                    wordBreak: 'break-word'
                  }}
                >
                  {renderFormattedText(msg.text)}

                  {/* Optional Action Link Button */}
                  {msg.actionLink && (
                    <div style={{ marginTop: '0.85rem', paddingTop: '0.65rem', borderTop: '1px solid #E2E8F0' }}>
                      {msg.actionLink.isExternal ? (
                        <a
                          href={msg.actionLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-sm"
                          style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                        >
                          <span>{msg.actionLink.text}</span>
                          <ExternalLink size={12} />
                        </a>
                      ) : (
                        <Link
                          to={msg.actionLink.url}
                          className="btn btn-primary btn-sm"
                          style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                        >
                          <span>{msg.actionLink.text}</span>
                          <ArrowRight size={12} />
                        </Link>
                      )}
                    </div>
                  )}
                </div>

                {/* Quick Reply suggestion chips for initial message */}
                {isBot && msg.quickReplies && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.65rem' }}>
                    {msg.quickReplies.map((chip, cIdx) => (
                      <button
                        key={cIdx}
                        type="button"
                        onClick={() => handleSend(chip)}
                        style={{
                          backgroundColor: '#ECFDF5',
                          color: '#065F46',
                          border: '1px solid #A7F3D0',
                          borderRadius: '20px',
                          padding: '0.35rem 0.75rem',
                          fontSize: '0.775rem',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                          textAlign: 'left'
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#D1FAE5')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ECFDF5')}
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                )}

                <div
                  style={{
                    fontSize: '0.7rem',
                    color: '#94A3B8',
                    marginTop: '0.25rem',
                    textAlign: isBot ? 'left' : 'right'
                  }}
                >
                  {msg.timestamp}
                </div>
              </div>
            </div>
          );
        })}

        {/* Typing indicator */}
        {isTyping && (
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: '#64748B', fontSize: '0.8rem' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#065F46', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Bot size={15} />
            </div>
            <div style={{ backgroundColor: '#FFFFFF', padding: '0.5rem 0.85rem', borderRadius: '12px', border: '1px solid #E2E8F0', fontStyle: 'italic', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span>Si-PANDU sedang mengetik</span>
              <span className="typing-dots">...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Bar */}
      <div style={{ padding: '0.85rem 1.25rem', backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <input
            type="text"
            className="form-input"
            placeholder="Tanyakan syarat, biaya per kelurahan, atau alur perkara..."
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{ borderRadius: '24px', padding: '0.65rem 1.1rem' }}
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleSend()}
            disabled={!inputVal.trim()}
            style={{
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              padding: 0,
              flexShrink: 0,
              opacity: inputVal.trim() ? 1 : 0.6
            }}
            aria-label="Kirim pesan"
          >
            <Send size={18} />
          </button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.4rem', fontSize: '0.725rem', color: '#94A3B8' }}>
          <span>💡 Tekan Enter untuk mengirim pesan</span>
          <span>Resmi Pengadilan Agama Bandung</span>
        </div>
      </div>
    </div>
  );
}
