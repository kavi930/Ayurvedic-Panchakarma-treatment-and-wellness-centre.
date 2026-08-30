import React, { useState, useRef, useEffect } from 'react';
import { ASSETS } from '../data/ayurvedaData';
import { ChatMessage } from '../types';
import { X, Send, Sparkles, Bot, User, CornerDownLeft, RefreshCw, BookOpen, ShieldCheck } from 'lucide-react';

interface AIAssistantDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  userDosha?: string;
  initialQuery?: string;
}

export const AIAssistantDrawer: React.FC<AIAssistantDrawerProps> = ({
  isOpen,
  onClose,
  userDosha,
  initialQuery,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: `### Namaste & Welcome to VedaSanctum.

I am **Acharya Anand**, your Ayurvedic Physician & Panchakarma Consultant.

I am here to guide you on classical treatments, dosha balancing, herbal remedies (*Rasayanas*), and personalized detox protocols.

${userDosha ? `I see your profile indicates a **${userDosha}** constitution. How may I serve your wellness journey today?` : 'How may I assist your healing journey today?'}`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    if (initialQuery && isOpen) {
      sendMessage(initialQuery);
    }
  }, [initialQuery, isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const quickPrompts = [
    'What is Shirodhara best for?',
    'How do I balance high Pitta & acidity?',
    'Explain the 3 phases of Panchakarma',
    'Which herbs boost Ojas & deep sleep?',
    'What is the ideal daily Dinacharya routine?'
  ];

  const sendMessage = async (textToSend?: string) => {
    const query = textToSend || inputMessage.trim();
    if (!query || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          userDosha: userDosha || '',
          conversationHistory: messages.slice(-4),
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const replyText = data.reply || 'Thank you for your inquiry. Please consult with our resident Vaidya for comprehensive medical evaluation.';

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'assistant',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error('Chat error:', err);
      const fallbackMsg: ChatMessage = {
        id: `bot-fallback-${Date.now()}`,
        sender: 'assistant',
        text: `### Namaste.

Ayurveda teaches that equilibrium (*Samatva*) is restored through mindful nutrition, personalized herbal oils, and classical Panchakarma therapies like **Abhyanga** and **Shirodhara**.

Please feel welcome to take our **Dosha Assessment** or explore our **Retreat Programs** for an immersive consultation.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end animate-fadeIn">
      <div
        className="w-full max-w-lg bg-[#fbf9f5] h-full shadow-2xl flex flex-col justify-between border-l border-[#e5e0d8] animate-slideLeft"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-[#e5e0d8] bg-[#334537] text-white flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#fed488] shadow-sm">
              <img
                src={ASSETS.assistantAvatar}
                alt="Acharya Anand - AI Ayurvedic Vaidya"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#334537]"></span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-display text-base font-medium text-white">Acharya Anand</h3>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-[#fed488] text-[#785a1a]">
                  Vaidya AI
                </span>
              </div>
              <p className="text-xs text-[#c0d5c2] flex items-center gap-1">
                <span>Senior Ayurvedic Specialist</span>
                {userDosha && <span>• Profile: <strong className="text-[#fed488]">{userDosha}</strong></span>}
              </p>
            </div>
          </div>

          <button
            id="close-assistant-btn"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Chat Messages Body */}
        <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4">
          
          {/* Quick Prompt Chips */}
          <div className="space-y-1.5 pb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#775a19] block">
              Suggested Inquiries:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => sendMessage(prompt)}
                  disabled={isLoading}
                  className="text-left text-xs px-3 py-1.5 rounded-full bg-white hover:bg-[#efeeea] border border-[#e5e0d8] text-[#37443a] transition-colors cursor-pointer shadow-2xs disabled:opacity-50"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Messages */}
          {messages.map((msg) => {
            const isUser = msg.sender === 'user';

            return (
              <div
                key={msg.id}
                className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!isUser && (
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-[#c5a059] flex-shrink-0 mt-1 shadow-2xs">
                    <img
                      src={ASSETS.assistantAvatar}
                      alt="Acharya Anand"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed shadow-sm ${
                    isUser
                      ? 'bg-[#334537] text-white rounded-tr-none'
                      : 'bg-white text-[#37443a] border border-[#e5e0d8] rounded-tl-none'
                  }`}
                >
                  {/* Message Formatter */}
                  <div className="space-y-2 whitespace-pre-wrap">
                    {msg.text.split('\n\n').map((para, pIdx) => {
                      if (para.startsWith('### ')) {
                        return (
                          <h4 key={pIdx} className={`font-display text-sm font-semibold ${isUser ? 'text-[#fed488]' : 'text-[#334537]'}`}>
                            {para.replace('### ', '')}
                          </h4>
                        );
                      }
                      if (para.startsWith('**') && para.endsWith('**')) {
                        return (
                          <p key={pIdx} className="font-semibold text-xs">
                            {para.replace(/\*\*/g, '')}
                          </p>
                        );
                      }
                      return <p key={pIdx}>{para}</p>;
                    })}
                  </div>
                  
                  <span className={`text-[10px] block text-right mt-2 ${isUser ? 'text-[#c0d5c2]' : 'text-[#6b7280]'}`}>
                    {msg.timestamp}
                  </span>
                </div>

                {isUser && (
                  <div className="w-8 h-8 rounded-full bg-[#fed488] text-[#785a1a] flex items-center justify-center flex-shrink-0 mt-1 font-bold text-xs">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex gap-3 justify-start items-center">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-[#c5a059] flex-shrink-0">
                <img
                  src={ASSETS.assistantAvatar}
                  alt="Acharya Anand"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="bg-white border border-[#e5e0d8] p-3.5 rounded-2xl rounded-tl-none flex items-center gap-2 text-xs text-[#6b7280]">
                <Sparkles className="w-3.5 h-3.5 text-[#c5a059] animate-spin" />
                <span>Consulting classical Ayurvedic manuscripts...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-4 border-t border-[#e5e0d8] bg-white">
          <div className="flex items-center gap-2 bg-[#f5f3ef] rounded-full px-4 py-2 border border-[#e5e0d8] focus-within:border-[#334537] focus-within:bg-white transition-all shadow-inner">
            <input
              ref={inputRef}
              id="ai-chat-input"
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about therapies, doshas, herbs, or diet..."
              className="flex-1 bg-transparent text-xs sm:text-sm text-[#334537] placeholder-[#6b7280] outline-none"
              disabled={isLoading}
            />
            <button
              id="ai-chat-send-btn"
              onClick={() => sendMessage()}
              disabled={!inputMessage.trim() || isLoading}
              className="w-8 h-8 rounded-full bg-[#334537] hover:bg-[#223025] disabled:opacity-40 text-white flex items-center justify-center transition-all cursor-pointer flex-shrink-0"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5 text-[#fed488]" />
            </button>
          </div>
          <p className="text-[10px] text-center text-[#6b7280] mt-2">
            Educational AI consultation grounded in authentic Charaka & Sushruta Samhita principles.
          </p>
        </div>

      </div>
    </div>
  );
};
