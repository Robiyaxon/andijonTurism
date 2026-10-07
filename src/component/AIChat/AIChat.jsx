import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({
  apiKey: process.env.REACT_APP_GEMINI_API_KEY,
});

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const currentInput = input.trim();

    // User xabarini qo'shish
    setMessages((prev) => [
      ...prev,
      {
        sender: 'user',
        text: currentInput,
      },
    ]);

    setInput('');
    setLoading(true);

    // AI uchun bo'sh xabar
    setMessages((prev) => [
      ...prev,
      {
        sender: 'bot',
        text: '',
      },
    ]);

    try {
      // STREAMING
      const response = await ai.models.generateContentStream({
        model: 'gemini-3.5-flash-lite',

        contents: currentInput,

        config: {
          temperature: 0.2,
          maxOutputTokens: 300,
        },
      });

      let fullText = '';

      // Javobni kelishi bilan chiqarish
      for await (const chunk of response) {
  const text = chunk.text || '';
  fullText += text;

  const currentText = fullText;

  setMessages((prev) => {
    const updated = [...prev];

    updated[updated.length - 1] = {
      sender: 'bot',
      text: currentText,
    };

    return updated;
  });
}

      // Agar javob bo'sh bo'lsa
      if (!fullText) {
        setMessages((prev) => {
          const updated = [...prev];

          updated[updated.length - 1] = {
            sender: 'bot',
            text: 'Javob olinmadi. Iltimos, qayta urinib ko‘ring.',
          };

          return updated;
        });
      }

    } catch (error) {
      console.error('GEMINI ERROR:', error);

      setMessages((prev) => {
        const updated = [...prev];

        updated[updated.length - 1] = {
          sender: 'bot',
          text: 'AI bilan ulanishda xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.',
        };

        return updated;
      });

    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 9999,
      }}
    >

      {/* CHAT OYNASI */}
      {isOpen && (
        <div
          style={{
            width: '350px',
            height: '450px',
            backgroundColor: '#ffffff',
            border: '1px solid #e0e0e0',
            borderRadius: '12px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '15px',
            overflow: 'hidden',
          }}
        >

          {/* HEADER */}
          <div
            style={{
              padding: '12px 16px',
              backgroundColor: '#007bff',
              color: '#ffffff',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontWeight: 'bold',
            }}
          >
            <span>Sayt AI Yordamchisi</span>

            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                fontSize: '18px',
              }}
            >
              ✕
            </button>
          </div>

          {/* XABARLAR */}
          <div
            style={{
              flex: 1,
              padding: '12px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >

            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  alignSelf:
                    msg.sender === 'user'
                      ? 'flex-end'
                      : 'flex-start',

                  background:
                    msg.sender === 'user'
                      ? '#007bff'
                      : '#f1f5f9',

                  color:
                    msg.sender === 'user'
                      ? '#ffffff'
                      : '#333333',

                  padding: '8px 12px',
                  borderRadius: '12px',
                  maxWidth: '80%',
                  wordBreak: 'break-word',
                  fontSize: '14px',
                  lineHeight: '1.5',
                }}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div
                style={{
                  fontSize: '12px',
                  color: '#888888',
                }}
              >
                AI yozmoqda...
              </div>
            )}

          </div>

          {/* INPUT */}
          <div
            style={{
              padding: '10px',
              borderTop: '1px solid #eeeeee',
              display: 'flex',
              gap: '8px',
            }}
          >

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSend();
                }
              }}
              placeholder="Savolingizni kiriting..."
              disabled={loading}
              style={{
                flex: 1,
                padding: '8px 12px',
                borderRadius: '6px',
                border: '1px solid #cccccc',
                outline: 'none',
              }}
            />

            <button
              onClick={handleSend}
              disabled={loading}
              style={{
                padding: '8px 14px',
                backgroundColor: loading
                  ? '#aaaaaa'
                  : '#007bff',
                color: '#ffffff',
                border: 'none',
                borderRadius: '6px',
                cursor: loading
                  ? 'not-allowed'
                  : 'pointer',
              }}
            >
              {loading ? '...' : 'Yuborish'}
            </button>

          </div>

        </div>
      )}

      {/* CHAT TUGMASI */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#007bff',
          color: '#ffffff',
          border: 'none',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          cursor: 'pointer',
          fontSize: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 'auto',
        }}
      >
        💬
      </button>

    </div>
  );
};

export default AIChat