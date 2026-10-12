import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import {
  INITIAL_BOT_MESSAGE,
  processUserQuery
} from '../../data/aiKnowledgeBase';

import CourtLogo from '../../assets/CourtLogo';

import {
  Send,
  Bot,
  User,
  RotateCcw,
  Sparkles,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

const STORAGE_KEY = 'pa_bandung_chat_history_v1';

export default function ChatWindow({ isWidgetMode = false }) {
  /* =========================================================
     STATE MESSAGES
  ========================================================= */
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

  /*
   * REF UNTUK CONTAINER PESAN
   *
   * Jangan menggunakan scrollIntoView() karena dapat menyebabkan
   * halaman utama ikut melakukan scroll.
   *
   * Kita langsung mengontrol scrollTop dari container chat.
   */
  const messagesContainerRef = useRef(null);

  /* =========================================================
     AUTO SCROLL CHAT
  ========================================================= */
  const scrollToBottom = (behavior = 'smooth') => {
    const container = messagesContainerRef.current;

    if (!container) return;

    container.scrollTo({
      top: container.scrollHeight,
      behavior
    });
  };

  /*
   * Scroll hanya dilakukan pada container pesan ketika:
   * - ada pesan baru
   * - bot mulai mengetik
   * - bot selesai mengetik
   *
   * Tidak akan membuat window / halaman utama ikut scroll.
   */
  useEffect(() => {
    scrollToBottom('smooth');

    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(messages)
      );
    } catch {
      // Abaikan jika localStorage penuh / tidak tersedia
    }
  }, [messages, isTyping]);

  /* =========================================================
     SEND MESSAGE
  ========================================================= */
  const handleSend = (textToSend = null) => {
    const query =
      typeof textToSend === 'string'
        ? textToSend
        : inputVal;

    if (!query || !query.trim()) return;

    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query.trim(),
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    /*
     * Tambahkan pesan user
     */
    setMessages((prev) => [
      ...prev,
      userMsg
    ]);

    /*
     * Bersihkan input jika pesan dikirim dari input utama.
     *
     * Jika berasal dari quick reply, tidak perlu.
     */
    if (typeof textToSend !== 'string') {
      setInputVal('');
    }

    /*
     * Simulasi AI sedang mengetik
     */
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = processUserQuery(query);

      const newBotMsg = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: botResponse.text,
        actionLink: botResponse.actionLink,
        timestamp: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      setMessages((prev) => [
        ...prev,
        newBotMsg
      ]);

      setIsTyping(false);
    }, 600);
  };

  /* =========================================================
     ENTER UNTUK MENGIRIM
  ========================================================= */
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();

      handleSend();
    }
  };

  /* =========================================================
     RESET CHAT
  ========================================================= */
  const handleClearChat = () => {
    localStorage.removeItem(STORAGE_KEY);

    setMessages([
      INITIAL_BOT_MESSAGE
    ]);

    setInputVal('');
    setIsTyping(false);
  };

  /* =========================================================
     FORMAT TEXT BOT
     Support:
     **bold**
     line break
  ========================================================= */
  const renderFormattedText = (text) => {
    if (!text) return null;

    const lines = text.split('\n');

    return lines.map((line, idx) => {
      /*
       * Pisahkan text berdasarkan **bold**
       */
      const parts = line.split(/(\*\*.*?\*\*)/g);

      return (
        <React.Fragment key={idx}>
          {parts.map((part, pIdx) => {
            if (
              part.startsWith('**') &&
              part.endsWith('**')
            ) {
              return (
                <strong key={pIdx}>
                  {part.slice(2, -2)}
                </strong>
              );
            }

            return (
              <React.Fragment key={pIdx}>
                {part}
              </React.Fragment>
            );
          })}

          {idx < lines.length - 1 && <br />}
        </React.Fragment>
      );
    });
  };

  /* =========================================================
     RENDER
  ========================================================= */
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',

        /*
         * Tinggi chat tetap sehingga pesan yang banyak
         * akan scroll di dalam container.
         */
        height: isWidgetMode
          ? '520px'
          : '640px',

        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        border: '1px solid #E2E8F0',
        boxShadow: 'var(--shadow-md)',

        /*
         * Penting agar child tidak keluar dari container.
         */
        overflow: 'hidden'
      }}
    >
      {/* =====================================================
          CHAT HEADER
      ====================================================== */}
      <div
        style={{
          backgroundColor: '#065F46',
          color: '#FFFFFF',

          padding: '1rem 1.25rem',

          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',

          boxShadow:
            '0 2px 4px rgba(0,0,0,0.06)',

          /*
           * Jangan biarkan header mengecil.
           */
          flexShrink: 0
        }}
      >
        {/* LEFT HEADER */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}
        >
          {/* LOGO */}
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

          {/* TITLE */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: '1rem',
                  color: '#FFFFFF',
                  fontWeight: 700
                }}
              >
                Si-PANDU AI
              </h3>

              {/* ONLINE BADGE */}
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
                <Sparkles size={10} />

                Online
              </span>
            </div>

            <span
              style={{
                fontSize: '0.75rem',
                color: '#A7F3D0'
              }}
            >
              Asisten Virtual Pengadilan Agama Bandung
              Kelas 1A
            </span>
          </div>
        </div>

        {/* ===================================================
            RESET BUTTON
        ==================================================== */}
        <button
          type="button"
          onClick={handleClearChat}
          title="Mulai percakapan baru"
          style={{
            background:
              'rgba(255,255,255,0.12)',

            border: 'none',
            color: '#FFFFFF',

            padding: '0.4rem 0.75rem',

            borderRadius: '6px',

            fontSize: '0.75rem',

            cursor: 'pointer',

            display: 'flex',
            alignItems: 'center',

            gap: '0.35rem',

            flexShrink: 0
          }}
        >
          <RotateCcw size={12} />

          <span>Reset</span>
        </button>
      </div>

      {/* =====================================================
          MESSAGES SCROLL AREA

          INI BAGIAN PENTING PERBAIKAN AUTO SCROLL
      ====================================================== */}
      <div
        ref={messagesContainerRef}
        style={{
          flex: 1,

          /*
           * WAJIB untuk flex container.
           *
           * Tanpa minHeight: 0 browser terkadang memperbesar
           * container berdasarkan isi daripada membuat scroll.
           */
          minHeight: 0,

          padding: '1.25rem',

          /*
           * Scroll hanya terjadi di sini.
           */
          overflowY: 'auto',
          overflowX: 'hidden',

          backgroundColor: '#F8FAFC',

          display: 'flex',
          flexDirection: 'column',

          gap: '1rem',

          /*
           * Mencegah scroll dari chat diteruskan ke halaman
           * ketika sudah mencapai ujung container.
           */
          overscrollBehavior: 'contain'
        }}
      >
        {/* ===================================================
            MESSAGE LIST
        ==================================================== */}
        {messages.map((msg) => {
          const isBot =
            msg.sender === 'bot';

          return (
            <div
              key={msg.id}
              style={{
                display: 'flex',

                gap: '0.65rem',

                alignItems: 'flex-start',

                flexDirection: isBot
                  ? 'row'
                  : 'row-reverse',

                maxWidth: '88%',

                alignSelf: isBot
                  ? 'flex-start'
                  : 'flex-end'
              }}
            >
              {/* =============================================
                  AVATAR
              ============================================== */}
              <div
                style={{
                  width: '32px',
                  height: '32px',

                  borderRadius: '50%',

                  backgroundColor: isBot
                    ? '#065F46'
                    : '#2563EB',

                  color: '#FFFFFF',

                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',

                  flexShrink: 0,

                  fontSize: '0.8rem',

                  marginTop: '2px'
                }}
              >
                {isBot ? (
                  <Bot size={18} />
                ) : (
                  <User size={18} />
                )}
              </div>

              {/* =============================================
                  MESSAGE CONTENT
              ============================================== */}
              <div
                style={{
                  minWidth: 0
                }}
              >
                {/* MESSAGE BUBBLE */}
                <div
                  style={{
                    backgroundColor: isBot
                      ? '#FFFFFF'
                      : '#065F46',

                    color: isBot
                      ? '#1E293B'
                      : '#FFFFFF',

                    padding:
                      '0.85rem 1.1rem',

                    borderRadius: isBot
                      ? '4px 14px 14px 14px'
                      : '14px 4px 14px 14px',

                    fontSize: '0.9rem',

                    lineHeight: 1.6,

                    boxShadow:
                      '0 1px 3px rgba(0,0,0,0.05)',

                    border: isBot
                      ? '1px solid #E2E8F0'
                      : 'none',

                    wordBreak: 'break-word'
                  }}
                >
                  {renderFormattedText(
                    msg.text
                  )}

                  {/* =========================================
                      OPTIONAL ACTION LINK
                  ========================================== */}
                  {msg.actionLink && (
                    <div
                      style={{
                        marginTop: '0.85rem',

                        paddingTop:
                          '0.65rem',

                        borderTop:
                          '1px solid #E2E8F0'
                      }}
                    >
                      {msg.actionLink
                        .isExternal ? (
                        <a
                          href={
                            msg.actionLink
                              .url
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-sm"
                          style={{
                            fontSize:
                              '0.8rem',

                            padding:
                              '0.35rem 0.75rem',

                            display:
                              'inline-flex',

                            alignItems:
                              'center',

                            gap: '0.35rem'
                          }}
                        >
                          <span>
                            {
                              msg
                                .actionLink
                                .text
                            }
                          </span>

                          <ExternalLink
                            size={12}
                          />
                        </a>
                      ) : (
                        <Link
                          to={
                            msg.actionLink
                              .url
                          }
                          className="btn btn-primary btn-sm"
                          style={{
                            fontSize:
                              '0.8rem',

                            padding:
                              '0.35rem 0.75rem',

                            display:
                              'inline-flex',

                            alignItems:
                              'center',

                            gap: '0.35rem'
                          }}
                        >
                          <span>
                            {
                              msg
                                .actionLink
                                .text
                            }
                          </span>

                          <ArrowRight
                            size={12}
                          />
                        </Link>
                      )}
                    </div>
                  )}
                </div>

                {/* ===========================================
                    QUICK REPLIES
                ============================================ */}
                {isBot &&
                  msg.quickReplies && (
                    <div
                      style={{
                        display: 'flex',

                        flexWrap: 'wrap',

                        gap: '0.4rem',

                        marginTop:
                          '0.65rem'
                      }}
                    >
                      {msg.quickReplies.map(
                        (
                          chip,
                          cIdx
                        ) => (
                          <button
                            key={cIdx}
                            type="button"
                            onClick={() =>
                              handleSend(
                                chip
                              )
                            }
                            style={{
                              backgroundColor:
                                '#ECFDF5',

                              color:
                                '#065F46',

                              border:
                                '1px solid #A7F3D0',

                              borderRadius:
                                '20px',

                              padding:
                                '0.35rem 0.75rem',

                              fontSize:
                                '0.775rem',

                              cursor:
                                'pointer',

                              transition:
                                'all 0.15s ease',

                              textAlign:
                                'left'
                            }}
                            onMouseEnter={(
                              e
                            ) => {
                              e.currentTarget.style.backgroundColor =
                                '#D1FAE5';
                            }}
                            onMouseLeave={(
                              e
                            ) => {
                              e.currentTarget.style.backgroundColor =
                                '#ECFDF5';
                            }}
                          >
                            {chip}
                          </button>
                        )
                      )}
                    </div>
                  )}

                {/* ===========================================
                    TIMESTAMP
                ============================================ */}
                <div
                  style={{
                    fontSize:
                      '0.7rem',

                    color:
                      '#94A3B8',

                    marginTop:
                      '0.25rem',

                    textAlign: isBot
                      ? 'left'
                      : 'right'
                  }}
                >
                  {msg.timestamp}
                </div>
              </div>
            </div>
          );
        })}

        {/* ===================================================
            TYPING INDICATOR
        ==================================================== */}
        {isTyping && (
          <div
            style={{
              display: 'flex',

              gap: '0.5rem',

              alignItems: 'center',

              color: '#64748B',

              fontSize: '0.8rem'
            }}
          >
            <div
              style={{
                width: '28px',
                height: '28px',

                borderRadius: '50%',

                backgroundColor:
                  '#065F46',

                color: '#FFF',

                display: 'flex',

                alignItems:
                  'center',

                justifyContent:
                  'center',

                flexShrink: 0
              }}
            >
              <Bot size={15} />
            </div>

            <div
              style={{
                backgroundColor:
                  '#FFFFFF',

                padding:
                  '0.5rem 0.85rem',

                borderRadius:
                  '12px',

                border:
                  '1px solid #E2E8F0',

                fontStyle:
                  'italic',

                display: 'flex',

                alignItems:
                  'center',

                gap: '0.4rem'
              }}
            >
              <span>
                Si-PANDU sedang
                mengetik
              </span>

              <span className="typing-dots">
                ...
              </span>
            </div>
          </div>
        )}

        {/*
          PENTING:

          messagesEndRef SUDAH DIHAPUS.

          Jangan tambahkan kembali:

          <div ref={messagesEndRef} />

          karena kita sekarang langsung mengontrol
          scroll container messagesContainerRef.
        */}
      </div>

      {/* =====================================================
          INPUT BAR
      ====================================================== */}
      <div
        style={{
          padding:
            '0.85rem 1.25rem',

          backgroundColor:
            '#FFFFFF',

          borderTop:
            '1px solid #E2E8F0',

          /*
           * Jangan biarkan input mengecil ketika pesan banyak.
           */
          flexShrink: 0
        }}
      >
        <div
          style={{
            display: 'flex',

            gap: '0.5rem',

            alignItems: 'center'
          }}
        >
          {/* INPUT */}
          <input
            type="text"
            className="form-input"
            placeholder="Tanyakan syarat, biaya per kelurahan, atau alur perkara..."
            value={inputVal}
            onChange={(e) =>
              setInputVal(
                e.target.value
              )
            }
            onKeyDown={
              handleKeyDown
            }
            style={{
              borderRadius:
                '24px',

              padding:
                '0.65rem 1.1rem',

              minWidth: 0,

              flex: 1
            }}
          />

          {/* SEND BUTTON */}
          <button
            type="button"
            className="btn btn-primary"
            onClick={() =>
              handleSend()
            }
            disabled={
              !inputVal.trim()
            }
            style={{
              borderRadius: '50%',

              width: '44px',
              height: '44px',

              padding: 0,

              flexShrink: 0,

              opacity:
                inputVal.trim()
                  ? 1
                  : 0.6
            }}
            aria-label="Kirim pesan"
          >
            <Send size={18} />
          </button>
        </div>

        {/* INPUT FOOTER */}
        <div
          style={{
            display: 'flex',

            justifyContent:
              'space-between',

            alignItems:
              'center',

            marginTop:
              '0.4rem',

            fontSize:
              '0.725rem',

            color:
              '#94A3B8',

            gap: '0.5rem'
          }}
        >
          <span>
            💡 Tekan Enter untuk mengirim pesan
          </span>

          <span>
            Resmi Pengadilan Agama Bandung
          </span>
        </div>
      </div>
    </div>
  );
}
