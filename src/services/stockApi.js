// Mock stock API service
// In a real application, this would connect to actual stock market APIs like Alpha Vantage, Yahoo Finance, or IEX Cloud

export const getStockData = async (symbol) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Mock data - in production, replace with actual API calls
  const mockData = {
    'RELIANCE': {
      symbol: 'RELIANCE',
      name: 'Reliance Industries Ltd.',
      price: 2456.80,
      change: 45.20,
      changePercent: 1.87,
      volume: '2.1M',
      marketCap: '16.6L Cr',
      sector: 'Oil & Gas',
      high: 2475.50,
      low: 2430.20,
      open: 2440.10,
      previousClose: 2411.60
    },
    'TCS': {
      symbol: 'TCS',
      name: 'Tata Consultancy Services',
      price: 3785.50,
      change: 67.30,
      changePercent: 1.81,
      volume: '1.8M',
      marketCap: '13.8L Cr',
      sector: 'IT',
      high: 3800.20,
      low: 3750.10,
      open: 3760.50,
      previousClose: 3718.20
    },
    'HDFCBANK': {
      symbol: 'HDFCBANK',
      name: 'HDFC Bank Ltd.',
      price: 1654.25,
      change: 23.45,
      changePercent: 1.44,
      volume: '3.2M',
      marketCap: '12.1L Cr',
      sector: 'Banking',
      high: 1665.80,
      low: 1640.20,
      open: 1645.10,
      previousClose: 1630.80
    }
  };

  return mockData[symbol] || null;
};

export const getMarketOverview = async () => {
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return {
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
};

export const getBreakoutStocks = async () => {
  await new Promise(resolve => setTimeout(resolve, 400));
  
  return [
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
    }
  ];
};

export const getStockChartData = async (symbol, timeframe = '1D') => {
  await new Promise(resolve => setTimeout(resolve, 200));
  
  // Generate mock chart data based on timeframe
  const basePrice = symbol === 'RELIANCE' ? 2450 : symbol === 'TCS' ? 3780 : 1650;
  const dataPoints = timeframe === '1D' ? 14 : timeframe === '1W' ? 7 : 30;
  const data = [];
  
  for (let i = 0; i < dataPoints; i++) {
    const time = new Date();
    time.setHours(9 + i * 0.5, 30 + (i * 30) % 60, 0, 0);
    
    data.push({
      time: time.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
      price: basePrice + Math.sin(i * 0.5) * 50 + Math.random() * 25
    });
  }
  
  return data;
};
