"use client";

import MarketCard from "./MarketCard";
import { useMarketData } from "@/context/MarketDataContext";

export default function LiveMarketCards() {
  const { data: cards, isLoading } = useMarketData();

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-500 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
      {cards.map((card, index) => (
        <MarketCard key={index} {...card} />
      ))}
    </div>
  );
}
