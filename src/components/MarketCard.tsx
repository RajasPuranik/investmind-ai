import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface MarketCardProps {
  title: string;
  value: string;
  change: string;
  isUp: boolean;
}

export default function MarketCard({ title, value, change, isUp }: MarketCardProps) {
  return (
    <div className="glass-panel p-6 rounded-xl hover:border-neon-cyan transition-all duration-300 group cursor-pointer">
      <h3 className="text-gray-400 font-medium mb-2">{title}</h3>
      <div className="flex items-end justify-between">
        <span className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors">{value}</span>
        <div className={`flex items-center ${isUp ? 'text-green-400' : 'text-red-400'}`}>
          {isUp ? <ArrowUpRight size={18} /> : <ArrowDownRight size={18} />}
          <span className="ml-1 font-medium">{change}</span>
        </div>
      </div>
    </div>
  );
}
