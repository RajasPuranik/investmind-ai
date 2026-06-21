import { NextResponse } from 'next/server';
import YahooFinance from 'yahoo-finance2';
const yahooFinance = new (YahooFinance as any)();

const SYMBOL_MAP: Record<string, string> = {
  '^IXIC': 'NASDAQ',
  '^NSEI': 'NIFTY 50',
  '^GSPC': 'S&P 500',
  'BTC-USD': 'BTC/USD',
  'EURUSD=X': 'EUR/USD',
  'GC=F': 'GOLD',
};

export async function GET() {
  try {
    const symbols = Object.keys(SYMBOL_MAP);
    const quotes = (await yahooFinance.quote(symbols as any)) as any[];
    
    const marketData = quotes.map(quote => {
      const price = quote.regularMarketPrice || 0;
      const previousClose = quote.regularMarketPreviousClose || price;
      const changePercent = previousClose ? ((price - previousClose) / previousClose) * 100 : 0;
      const isUp = changePercent >= 0;
      
      let formattedPrice = price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 });
      if (['BTC-USD', 'GC=F'].includes(quote.symbol)) {
        formattedPrice = `$${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      }

      return {
        id: quote.symbol,
        title: SYMBOL_MAP[quote.symbol] || quote.symbol,
        symbol: SYMBOL_MAP[quote.symbol] || quote.symbol, // For the ticker
        value: formattedPrice,
        price: formattedPrice, // For the ticker
        change: `${isUp ? '+' : ''}${changePercent.toFixed(2)}%`,
        isUp: isUp,
        up: isUp // For the ticker
      };
    });

    return NextResponse.json(marketData);
  } catch (error) {
    console.error('Error fetching market data:', error);
    return NextResponse.json({ error: 'Failed to fetch market data' }, { status: 500 });
  }
}
