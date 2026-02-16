
import React, { useState, useRef, useEffect } from 'react';
import { User, Send, X, MessageSquareText, Loader2, Phone } from 'lucide-react';
import { getSumpPumpAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Hey there. I'm the lead tech here. Worried about your basement? Ask me anything about our backup systems." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);
    const aiResponse = await getSumpPumpAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="mb-6 w-[380px] sm:w-[420px] h-[550px] bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-100 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-8">
          {/* Header */}
          <div className="p-6 bg-slate-900 text-white flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center border-2 border-white/20">
                  <User size={24} />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900"></span>
              </div>
              <div>
                <div className="font-bold text-lg leading-tight">AquaShield Pro</div>
                <div className="text-xs text-slate-400 font-medium tracking-wide">Live Support | Fort Wayne</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#fdfcf8]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-5 rounded-3xl text-[15px] font-medium leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl border border-slate-200 rounded-tl-none flex items-center gap-3">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce delay-100"></span>
                    <span className="w-1.5 h-1.5 bg-blue-800 rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-5 bg-white border-t border-slate-100">
            <div className="flex items-center gap-3 bg-slate-100 p-2 rounded-2xl">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your question..."
                className="flex-1 bg-transparent border-none focus:ring-0 px-4 py-2 text-[15px] font-medium"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="bg-slate-900 text-white p-3 rounded-xl hover:bg-blue-600 transition-colors disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
            <div className="mt-3 text-center">
              <a href="tel:8443406413" className="text-xs font-bold text-slate-400 flex items-center justify-center gap-1 hover:text-blue-600 transition-colors">
                <Phone size={12} /> Emergency? Call (844) 340-6413
              </a>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:scale-105 transition-all duration-300 group overflow-hidden"
      >
        <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        <div className="relative z-10">
          {isOpen ? <X size={28} /> : <MessageSquareText size={28} />}
        </div>
      </button>
    </div>
  );
};

export default GeminiAssistant;
