export default function MarketTicker() {
  const tickers = [
    { symbol: 'NASDAQ', price: '18,234.56', change: '+1.2%', up: true },
    { symbol: 'NIFTY50', price: '23,145.20', change: '+0.8%', up: true },
    { symbol: 'BTC/USD', price: '64,520.00', change: '-2.1%', up: false },
    { symbol: 'EUR/USD', price: '1.0845', change: '+0.1%', up: true },
    { symbol: 'S&P 500', price: '5,304.72', change: '+0.9%', up: true },
    { symbol: 'GOLD', price: '2,340.10', change: '+0.4%', up: true },
    { symbol: 'ETH/USD', price: '3,450.25', change: '-1.5%', up: false },
  ];

  return (
    <div className="w-full bg-cyber-bg border-y border-cyber-panel-border overflow-hidden flex whitespace-nowrap py-3 glass-panel z-10">
      <div className="animate-marquee flex items-center space-x-12 px-6">
        {[...tickers, ...tickers, ...tickers, ...tickers].map((ticker, index) => (
          <div key={index} className="flex items-center space-x-2">
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
