import React from 'react';
import { TrendingUp, TrendingDown, Activity, DollarSign } from 'lucide-react';

const MarketOverview = () => {
  const marketData = {
    indices: [
      { name: 'NIFTY 50', value: '21,725.70', change: '+125.40', changePercent: '+0.58%', isPositive: true },
      { name: 'SENSEX', value: '72,101.69', change: '+492.75', changePercent: '+0.69%', isPositive: true },
      { name: 'NIFTY BANK', value: '47,234.15', change: '-89.30', changePercent: '-0.19%', isPositive: false },
      { name: 'NIFTY IT', value: '35,678.45', change: '+234.60', changePercent: '+0.66%', isPositive: true }
    ],
    sectors: [
      { name: 'IT & Software', change: '+1.8%', isPositive: true },
      { name: 'Banking', change: '+0.9%', isPositive: true },
      { name: 'FMCG', change: '+2.3%', isPositive: true },
      { name: 'Oil & Gas', change: '+1.5%', isPositive: true },
      { name: 'Pharma', change: '-0.4%', isPositive: false }
    ]
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Market Overview</h2>
        <div className="flex items-center text-sm text-gray-600">
          <Activity className="h-4 w-4 mr-2" />
          <span>Live Data</span>
        </div>
      </div>

      {/* Major Indices */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Major Indices</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {marketData.indices.map((index, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">{index.name}</span>
                {index.isPositive ? (
                  <TrendingUp className="h-4 w-4 text-green-600" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-600" />
                )}
              </div>
              <div className="text-xl font-bold text-gray-800">{index.value}</div>
              <div className={`text-sm font-semibold ${index.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                {index.change} ({index.changePercent})
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sector Performance */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Sector Performance</h3>
        <div className="space-y-3">
          {marketData.sectors.map((sector, idx) => (
            <div key={idx} className="flex items-center justify-between py-2">
              <span className="text-gray-700">{sector.name}</span>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full mr-2 ${sector.isPositive ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <span className={`font-semibold ${sector.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                  {sector.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketOverview;
