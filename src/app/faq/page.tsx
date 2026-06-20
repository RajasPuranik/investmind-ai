"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is InvestMind AI?",
      answer: "InvestMind AI is an educational chatbot with a cyberpunk twist, designed to act as your personal mentor for learning about financial markets like NASDAQ, NIFTY, FOREX, and Cryptocurrency. It uses powerful analogies to make complex concepts easy to understand."
    },
    {
      question: "Does InvestMind AI give financial advice?",
      answer: "No. InvestMind AI is strictly an educational tool. It will never give you direct buy/sell calls, stock picks, or financial advice. Always consult with a licensed financial advisor before making real investments."
    },
    {
      question: "How do I use the Chat feature?",
      answer: "Simply navigate to the Chat page and type your question! You can ask things like 'Explain how a blockchain works like a public ledger' or 'What is the difference between NASDAQ and NIFTY 50?'. You can also click any of the Quick Topics in the sidebar."
    },
    {
      question: "Who built InvestMind AI?",
      answer: "This is a collaboration project designed & developed by Samarth Tayal x Rajas Puranik 🚀. It is powered by Next.js, Tailwind CSS, and the OpenAI API."
    },
    {
      question: "Why a Cyberpunk theme?",
      answer: "We believe learning about the future of finance (like Crypto and algorithmic trading) pairs perfectly with a futuristic, cyberpunk aesthetic. It makes the learning experience more immersive and engaging!"
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyber-bg border-2 border-neon-purple shadow-[0_0_20px_rgba(181,55,242,0.4)] mb-6">
          <HelpCircle size={32} className="text-neon-purple" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">
          Frequently Asked <span className="text-neon-purple">Questions</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Everything you need to know about your personal AI Investment Mentor.
        </p>
      </div>

      <div className="space-y-4 relative z-10">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`glass-panel rounded-xl overflow-hidden transition-all duration-300 border ${
              openIndex === index ? 'border-neon-cyan shadow-[0_0_15px_rgba(0,240,255,0.15)]' : 'border-cyber-panel-border hover:border-neon-cyan/50'
            }`}
          >
            <button
              className="w-full px-6 py-5 flex items-center justify-between focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-bold text-left text-lg text-white group-hover:text-neon-cyan transition-colors">
                {faq.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="text-neon-cyan flex-shrink-0" />
              ) : (
                <ChevronDown className="text-gray-400 flex-shrink-0" />
              )}
            </button>
            
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-gray-300 leading-relaxed border-t border-cyber-panel-border/50 pt-4">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
