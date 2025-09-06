import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, BarChart3 } from 'lucide-react';

const StockCard = ({ symbol, name, price, change, changePercent, volume, marketCap, trend, sector }) => {
  const isPositive = change >= 0;
  const trendColor = isPositive ? 'text-green-600' : 'text-red-600';
  const bgColor = isPositive ? 'bg-green-50' : 'bg-red-50';
  const borderColor = isPositive ? 'border-green-200' : 'border-red-200';

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 border-l-4 ${borderColor} hover:shadow-xl transition-shadow`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{symbol}</h3>
          <p className="text-sm text-gray-600">{name}</p>
          <span className="inline-block px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full mt-1">
            {sector}
          </span>
        </div>
        <div className={`p-2 rounded-full ${bgColor}`}>
          {isPositive ? (
            <TrendingUp className="h-5 w-5 text-green-600" />
          ) : (
            <TrendingDown className="h-5 w-5 text-red-600" />
          )}
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-800">₹{price}</span>
          <div className={`text-right ${trendColor}`}>
            <div className="text-sm font-semibold">
              {isPositive ? '+' : ''}₹{change}
            </div>
            <div className="text-xs">
              {isPositive ? '+' : ''}{changePercent}%
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center text-gray-600">
            <BarChart3 className="h-4 w-4 mr-2" />
            <span>Vol: {volume}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <DollarSign className="h-4 w-4 mr-2" />
            <span>Mkt Cap: {marketCap}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockCard;
