import React from 'react';
import { TrendingUp, Target, Zap, Star } from 'lucide-react';

const BreakoutStocks = () => {
  const breakoutStocks = [
    {
      symbol: 'ADANIPORTS',
      name: 'Adani Ports & SEZ Ltd.',
      price: 1256.80,
      change: 89.45,
      changePercent: 7.66,
      volume: '2.8M',
      breakoutReason: 'Infrastructure development boost',
      confidence: 92,
      targetPrice: 1400.00,
      sector: 'Infrastructure'
    },
    {
      symbol: 'TATAMOTORS',
      name: 'Tata Motors Ltd.',
      price: 678.45,
      change: 45.30,
      changePercent: 7.15,
      volume: '4.2M',
      breakoutReason: 'EV segment growth',
      confidence: 88,
      targetPrice: 750.00,
      sector: 'Automotive'
    },
    {
      symbol: 'BAJFINANCE',
      name: 'Bajaj Finance Ltd.',
      price: 7234.50,
      change: 456.75,
      changePercent: 6.74,
      volume: '1.8M',
      breakoutReason: 'Digital lending expansion',
      confidence: 90,
      targetPrice: 8000.00,
      sector: 'NBFC'
    },
    {
      symbol: 'TITAN',
      name: 'Titan Company Ltd.',
      price: 3456.25,
      change: 234.60,
      changePercent: 7.29,
      volume: '1.5M',
      breakoutReason: 'Festival season demand',
      confidence: 85,
      targetPrice: 3800.00,
      sector: 'Consumer Goods'
    },
    {
      symbol: 'MARUTI',
      name: 'Maruti Suzuki India Ltd.',
      price: 10890.75,
      change: 567.30,
      changePercent: 5.50,
      volume: '1.2M',
      breakoutReason: 'Rural market recovery',
      confidence: 87,
      targetPrice: 12000.00,
      sector: 'Automotive'
    },
    {
      symbol: 'SUNPHARMA',
      name: 'Sun Pharmaceutical Industries',
      price: 1234.60,
      change: 78.45,
      changePercent: 6.78,
      volume: '2.1M',
      breakoutReason: 'US market expansion',
      confidence: 89,
      targetPrice: 1350.00,
      sector: 'Pharmaceuticals'
    }
  ];

  const getConfidenceColor = (confidence) => {
    if (confidence >= 90) return 'text-green-600 bg-green-100';
    if (confidence >= 80) return 'text-yellow-600 bg-yellow-100';
    return 'text-orange-600 bg-orange-100';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Breakout Stocks</h2>
        <div className="flex items-center text-sm text-blue-600">
          <Zap className="h-4 w-4 mr-2" />
          <span>High Momentum</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {breakoutStocks.map((stock, idx) => (
          <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-bold text-gray-800">{stock.symbol}</h3>
                <p className="text-sm text-gray-600">{stock.name}</p>
                <span className="inline-block px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full mt-1">
                  {stock.sector}
                </span>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-gray-800">₹{stock.price}</div>
                <div className="text-sm font-semibold text-green-600">
                  +₹{stock.change} (+{stock.changePercent}%)
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">Breakout Reason</span>
                  <div className={`px-2 py-1 rounded-full text-xs font-semibold ${getConfidenceColor(stock.confidence)}`}>
                    {stock.confidence}% confidence
                  </div>
                </div>
                <p className="text-sm text-gray-700">{stock.breakoutReason}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-white rounded-lg p-2 text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Target className="h-4 w-4 text-blue-600 mr-1" />
                    <span className="font-semibold text-gray-700">Target</span>
                  </div>
                  <div className="text-lg font-bold text-blue-600">₹{stock.targetPrice}</div>
                </div>
                <div className="bg-white rounded-lg p-2 text-center">
                  <div className="flex items-center justify-center mb-1">
                    <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                    <span className="font-semibold text-gray-700">Volume</span>
                  </div>
                  <div className="text-lg font-bold text-green-600">{stock.volume}</div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="flex items-center text-yellow-600">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < Math.floor(stock.confidence / 20) ? 'fill-current' : ''}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BreakoutStocks;
