import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ChatWindow from './ChatWindow';
import { Bot, Sparkles, X, Maximize2, MessageSquare } from 'lucide-react';

export default function FloatingChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // If already on the dedicated /asisten-ai page, hide the floating widget to prevent redundancy
  if (location.pathname === '/asisten-ai') {
    return null;
  }

  return (
    <div className="no-print" style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 999 }}>
      {/* Floating Popup Chat Window */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            bottom: '70px',
            right: '0',
            width: '380px',
            maxWidth: 'calc(100vw - 32px)',
            boxShadow: '0 20px 25px -5px rgba(0,0,0,0.2), 0 10px 10px -5px rgba(0,0,0,0.1)',
            borderRadius: '16px',
            overflow: 'hidden',
            animation: 'fadeIn 0.2s ease-out'
          }}
        >
          {/* Top control bar inside popup */}
          <div style={{ backgroundColor: '#065F46', padding: '0.4rem 0.75rem', display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
            <Link
              to="/asisten-ai"
              onClick={() => setIsOpen(false)}
              style={{ color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem', textDecoration: 'none', background: 'rgba(255,255,255,0.15)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}
              title="Buka Layar Penuh"
            >
              <Maximize2 size={12} />
              <span>Layar Penuh</span>
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              style={{ color: '#FFFFFF', background: 'none', border: 'none', cursor: 'pointer', padding: '0.2rem' }}
              aria-label="Tutup Chat"
            >
              <X size={16} />
            </button>
          </div>
          <ChatWindow isWidgetMode={true} />
        </div>
      )}

      {/* Floating Action Launcher Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: '#065F46',
          color: '#FFFFFF',
          border: '2px solid #34D399',
          borderRadius: '50px',
          padding: isOpen ? '0.75rem' : '0.75rem 1.25rem',
          boxShadow: '0 10px 15px -3px rgba(6, 95, 70, 0.4)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          fontWeight: 700,
          fontSize: '0.9rem',
          transition: 'transform 0.15s ease, box-shadow 0.15s ease',
          outline: 'none'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
        aria-label="Buka Chatbot Si-PANDU AI"
      >
        {isOpen ? (
          <X size={22} />
        ) : (
          <>
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: '#10B981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Bot size={16} />
            </div>
            <span>Tanya Si-PANDU AI</span>
            <span
              style={{
                backgroundColor: '#F59E0B',
                color: '#1E293B',
                fontSize: '0.65rem',
                padding: '0.1rem 0.35rem',
                borderRadius: '10px',
                fontWeight: 800
              }}
            >
              24 Jam
            </span>
          </>
        )}
      </button>
    </div>
  );
}
