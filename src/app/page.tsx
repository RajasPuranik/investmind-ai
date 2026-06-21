import Link from "next/link";
import MarketTicker from "@/components/MarketTicker";
import LiveMarketCards from "@/components/LiveMarketCards";
import { MarketDataProvider } from "@/context/MarketDataContext";

export default function Home() {
  return (
    <MarketDataProvider>
      <div className="flex flex-col min-h-full">
        <MarketTicker />
        
        <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex flex-col justify-center">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4 px-4 py-1 rounded-full glass-panel border border-neon-purple text-neon-purple text-sm font-semibold tracking-wide">
              Built with ❤️ by Rajas Puranik & Samarth Tayal
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight text-white">
              Master the Markets with <br className="hidden md:block" />
              <span className="text-neon-cyan">InvestMind AI</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10">
              Your personal cyberpunk AI mentor for navigating NASDAQ, NIFTY, FOREX, and Crypto. 
              No financial advice, just pure knowledge and powerful analogies.
            </p>
            <div className="flex justify-center gap-6">
              <Link href="/chat" className="px-8 py-4 bg-transparent border-2 border-neon-cyan text-neon-cyan font-bold rounded-lg hover:bg-neon-cyan hover:text-cyber-bg transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                Start Mentoring
              </Link>
              <Link href="/faq" className="px-8 py-4 glass-panel text-white font-bold rounded-lg hover:border-neon-purple hover:text-neon-purple transition-all duration-300">
                How it works
              </Link>
            </div>
          </div>

          {/* Market Cards Grid */}
          <LiveMarketCards />
        </div>
      </div>
    </MarketDataProvider>
  );
}
