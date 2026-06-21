"use client";

import { useMarketData } from '@/context/MarketDataContext';

export default function MarketTicker() {
  const { data: tickers } = useMarketData();

  return (
    <div className="w-full bg-cyber-bg border-y border-cyber-panel-border overflow-hidden flex whitespace-nowrap py-3 glass-panel z-10">
      <div className="animate-marquee flex items-center space-x-12 px-6">
        {[...tickers, ...tickers, ...tickers, ...tickers].map((ticker, index) => (
          <div key={`${ticker.symbol}-${index}`} className="flex items-center space-x-2">
            <span className="font-bold text-gray-300">{ticker.symbol}</span>
            <span className="text-white">{ticker.price}</span>
            <span className={ticker.up ? 'text-green-400' : 'text-red-400'}>
              {ticker.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
