"use client";

import { useChat } from "@ai-sdk/react";
import { Send, Bot, User, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit, setInput, isLoading } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickSuggestions = [
    "Explain Forex trading using an analogy",
    "How does the NASDAQ work?",
    "What is the NIFTY 50 index?",
    "Can you give me a stock to buy right now?",
    "Explain Crypto blockchain basics",
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex h-[calc(100vh-140px)] max-w-7xl mx-auto w-full p-4 md:p-6 gap-6">
      {/* Sidebar for suggestions */}
      <div className="hidden lg:flex flex-col w-80 space-y-4">
        <div className="glass-panel p-6 rounded-xl flex-1 border-neon-purple/30 flex flex-col">
          <h2 className="text-xl font-bold font-heading text-white mb-6 flex items-center gap-2">
            <Sparkles className="text-neon-cyan" size={20} />
            Quick Topics
          </h2>
          <div className="space-y-3 flex-1">
            {quickSuggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => setInput(suggestion)}
                className="w-full text-left p-3 rounded-lg bg-cyber-bg/50 border border-cyber-panel-border hover:border-neon-cyan text-sm text-gray-300 hover:text-neon-cyan transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-neon-purple/10 border border-neon-purple/20 rounded-lg">
            <p className="text-xs text-neon-purple leading-relaxed">
              <strong>Note:</strong> InvestMind AI is an educational tool. It does not provide financial advice or buy/sell calls.
            </p>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col glass-panel rounded-xl overflow-hidden border-neon-cyan/30 relative z-10">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 scroll-smooth">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-cyber-bg border-2 border-neon-cyan flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                <Bot size={40} className="text-neon-cyan" />
              </div>
              <h3 className="text-2xl font-bold text-white">Initialize Link...</h3>
              <p className="text-gray-400 max-w-md">
                Connect to the InvestMind AI mentor network. Ask about markets, indices, or crypto to begin your training.
              </p>
            </div>
          ) : (
            messages.map((m) => (
              <div key={m.id} className={`flex gap-4 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {m.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-cyber-bg border border-neon-cyan flex-shrink-0 flex items-center justify-center mt-1">
                    <Bot size={16} className="text-neon-cyan" />
                  </div>
                )}
                <div 
                  className={`max-w-[80%] p-4 rounded-xl ${
                    m.role === 'user' 
                      ? 'bg-neon-purple/20 border border-neon-purple/50 text-white rounded-tr-none' 
                      : 'bg-cyber-bg/80 border border-cyber-panel-border text-gray-300 rounded-tl-none leading-relaxed'
                  }`}
                >
                  {m.content}
                </div>
                {m.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-neon-purple/20 border border-neon-purple flex-shrink-0 flex items-center justify-center mt-1">
                    <User size={16} className="text-neon-purple" />
                  </div>
                )}
              </div>
            ))
          )}
          {isLoading && messages[messages.length - 1]?.role === 'user' && (
             <div className="flex gap-4 justify-start">
               <div className="w-8 h-8 rounded-full bg-cyber-bg border border-neon-cyan flex-shrink-0 flex items-center justify-center mt-1">
                  <Bot size={16} className="text-neon-cyan" />
               </div>
               <div className="p-4 rounded-xl bg-cyber-bg/80 border border-neon-cyan/50 text-neon-cyan rounded-tl-none flex items-center space-x-2">
                 <div className="w-2 h-2 bg-neon-cyan rounded-full animate-bounce" />
                 <div className="w-2 h-2 bg-neon-cyan rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                 <div className="w-2 h-2 bg-neon-cyan rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <div className="p-4 border-t border-cyber-panel-border bg-cyber-bg/50">
          <form onSubmit={handleSubmit} className="flex gap-4 relative">
            <input
              className="flex-1 bg-cyber-bg border border-cyber-panel-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all placeholder-gray-500"
              value={input}
              placeholder="Ask your mentor..."
              onChange={handleInputChange}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="px-4 py-3 bg-transparent border border-neon-cyan text-neon-cyan rounded-lg hover:bg-neon-cyan hover:text-cyber-bg disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-neon-cyan transition-all flex items-center justify-center"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
