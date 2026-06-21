"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

export interface MarketData {
  id: string;
  title: string;
  symbol: string;
  value: string;
  price: string;
  change: string;
  isUp: boolean;
  up: boolean;
}

interface MarketDataContextType {
  data: MarketData[];
  isLoading: boolean;
  error: string | null;
}

const defaultData: MarketData[] = [
  { id: '^IXIC', title: 'NASDAQ', symbol: 'NASDAQ', value: '18,234.56', price: '18,234.56', change: '+1.2%', isUp: true, up: true },
  { id: '^NSEI', title: 'NIFTY 50', symbol: 'NIFTY 50', value: '23,145.20', price: '23,145.20', change: '+0.8%', isUp: true, up: true },
  { id: '^GSPC', title: 'S&P 500', symbol: 'S&P 500', value: '5,304.72', price: '5,304.72', change: '+0.9%', isUp: true, up: true },
  { id: 'BTC-USD', title: 'BTC/USD', symbol: 'BTC/USD', value: '$64,520', price: '$64,520', change: '-2.1%', isUp: false, up: false },
  { id: 'EURUSD=X', title: 'EUR/USD', symbol: 'EUR/USD', value: '1.0845', price: '1.0845', change: '+0.1%', isUp: true, up: true },
  { id: 'GC=F', title: 'GOLD', symbol: 'GOLD', value: '$2,340.10', price: '$2,340.10', change: '+0.4%', isUp: true, up: true },
];

const MarketDataContext = createContext<MarketDataContextType>({
  data: defaultData,
  isLoading: true,
  error: null,
});

export const MarketDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<MarketData[]>(defaultData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Set loading only if we have no data yet (don't flash loading on polling)
        const response = await fetch('/api/market-data');
        if (!response.ok) throw new Error('Failed to fetch data');
        const result = await response.json();
        
        // Ensure the results match our expected order for display
        const order = ['^IXIC', '^NSEI', '^GSPC', 'BTC-USD', 'EURUSD=X', 'GC=F'];
        result.sort((a: MarketData, b: MarketData) => order.indexOf(a.id) - order.indexOf(b.id));

        setData(result);
        setError(null);
      } catch (err) {
        console.error('Error in MarketDataProvider:', err);
        setError('Failed to load market data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(); // Initial fetch
    
    // Poll every 60 seconds
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <MarketDataContext.Provider value={{ data, isLoading, error }}>
      {children}
    </MarketDataContext.Provider>
  );
};

export const useMarketData = () => useContext(MarketDataContext);
