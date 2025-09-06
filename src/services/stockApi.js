// Real-time stock API service using NSE India website
// Fetches live data directly from NSE India's public endpoints

import { NSE_CONFIG } from '../config/api.js';

const NSE_BASE_URL = NSE_CONFIG.BASE_URL;
const NSE_API_BASE = NSE_CONFIG.API_BASE;

// Helper function to make NSE API calls
const makeNseApiCall = async (endpoint, options = {}) => {
  try {
    // First, get the main page to establish session
    const mainPageResponse = await fetch(NSE_BASE_URL, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
      }
    });

    // Extract cookies from the main page response
    const cookies = mainPageResponse.headers.get('set-cookie') || '';
    
    const response = await fetch(`${NSE_API_BASE}${endpoint}`, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Referer': NSE_BASE_URL,
        'Cookie': cookies,
        'X-Requested-With': 'XMLHttpRequest',
        ...options.headers
      },
      ...options
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('NSE API call failed:', error);
    throw error;
  }
};

// Get real-time stock data from NSE
export const getStockData = async (symbol) => {
  try {
    const data = await makeNseApiCall(`/quote-equity?symbol=${symbol}`);
    
    if (!data || !data.info) {
      throw new Error('Stock data not found');
    }

    return formatNseStockData(data, symbol);
  } catch (error) {
    console.error('Error fetching stock data from NSE:', error);
    // Return mock data as fallback
    return getMockStockData(symbol);
  }
};

// Format NSE API response to our expected format
const formatNseStockData = (data, symbol) => {
  const info = data.info;
  const priceData = data.priceInfo;
  
  const price = parseFloat(priceData.lastPrice);
  const change = parseFloat(priceData.change);
  const changePercent = parseFloat(priceData.pChange);
  const volume = priceData.totalTradedVolume;
  const high = parseFloat(priceData.intraDayHighLow?.max || priceData.dayHigh);
  const low = parseFloat(priceData.intraDayHighLow?.min || priceData.dayLow);
  const open = parseFloat(priceData.open);
  const previousClose = parseFloat(priceData.previousClose);

  // Get company info from NSE data or fallback
  const companyInfo = getCompanyInfo(symbol, info);

  return {
    symbol: symbol,
    name: info.companyName || companyInfo.name,
    price: price,
    change: change,
    changePercent: changePercent,
    volume: formatVolume(volume),
    marketCap: formatMarketCap(priceData.marketCap) || companyInfo.marketCap,
    sector: info.industry || companyInfo.sector,
    high: high,
    low: low,
    open: open,
    previousClose: previousClose
  };
};

// Format volume for display
const formatVolume = (volume) => {
  const num = parseInt(volume);
  if (num >= 10000000) {
    return `${(num / 10000000).toFixed(1)}Cr`;
  } else if (num >= 100000) {
    return `${(num / 100000).toFixed(1)}L`;
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return volume?.toString() || '0';
};

// Format market cap for display
const formatMarketCap = (marketCap) => {
  if (!marketCap) return null;
  const num = parseFloat(marketCap);
  if (num >= 100000000000) {
    return `${(num / 100000000000).toFixed(1)}L Cr`;
  } else if (num >= 10000000000) {
    return `${(num / 10000000000).toFixed(1)}K Cr`;
  } else if (num >= 1000000000) {
    return `${(num / 1000000000).toFixed(1)}B`;
  }
  return marketCap;
};

// Company information mapping (fallback when NSE data is not available)
const getCompanyInfo = (symbol, nseInfo = null) => {
  // If NSE provides company info, use it
  if (nseInfo && nseInfo.companyName) {
    return {
      name: nseInfo.companyName,
      marketCap: nseInfo.marketCap || 'N/A',
      sector: nseInfo.industry || 'Unknown'
    };
  }

  // Fallback to known companies
  const companies = {
    'RELIANCE': {
      name: 'Reliance Industries Ltd.',
      marketCap: '16.6L Cr',
      sector: 'Oil & Gas'
    },
    'TCS': {
      name: 'Tata Consultancy Services',
      marketCap: '13.8L Cr',
      sector: 'IT'
    },
    'HDFCBANK': {
      name: 'HDFC Bank Ltd.',
      marketCap: '12.1L Cr',
      sector: 'Banking'
    },
    'INFY': {
      name: 'Infosys Ltd.',
      marketCap: '6.1L Cr',
      sector: 'IT'
    },
    'HINDUNILVR': {
      name: 'Hindustan Unilever Ltd.',
      marketCap: '6.2L Cr',
      sector: 'FMCG'
    },
    'ITC': {
      name: 'ITC Ltd.',
      marketCap: '5.7L Cr',
      sector: 'FMCG'
    }
  };

  return companies[symbol] || {
    name: `${symbol} Ltd.`,
    marketCap: 'N/A',
    sector: 'Unknown'
  };
};

// Fallback mock data
const getMockStockData = (symbol) => {
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
  try {
    // Get real-time data for major indices from NSE
    const indices = await Promise.all([
      getNseIndexData('NIFTY 50'),
      getNseIndexData('NIFTY BANK'),
      getNseIndexData('NIFTY IT'),
      getNseIndexData('NIFTY FMCG')
    ]);

    return {
      indices: indices.filter(index => index !== null),
      sectors: [
        { name: 'IT & Software', change: '+1.8%', isPositive: true },
        { name: 'Banking', change: '+0.9%', isPositive: true },
        { name: 'FMCG', change: '+2.3%', isPositive: true },
        { name: 'Oil & Gas', change: '+1.5%', isPositive: true },
        { name: 'Pharma', change: '-0.4%', isPositive: false }
      ]
    };
  } catch (error) {
    console.error('Error fetching market overview:', error);
    // Return mock data as fallback
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
  }
};

// Get NSE index data
const getNseIndexData = async (indexName) => {
  try {
    const data = await makeNseApiCall(`/allIndices`);
    
    if (!data || !data.data) {
      return null;
    }

    // Find the specific index
    const indexData = data.data.find(index => 
      index.indexName === indexName || 
      index.indexName.includes(indexName.split(' ')[0])
    );

    if (!indexData) {
      return null;
    }

    const price = parseFloat(indexData.last);
    const change = parseFloat(indexData.variation);
    const changePercent = parseFloat(indexData.percentChange);

    return {
      name: indexData.indexName,
      value: price.toFixed(2),
      change: change >= 0 ? `+${change.toFixed(2)}` : change.toFixed(2),
      changePercent: changePercent >= 0 ? `+${changePercent.toFixed(2)}%` : `${changePercent.toFixed(2)}%`,
      isPositive: change >= 0
    };
  } catch (error) {
    console.error(`Error fetching NSE index data for ${indexName}:`, error);
    return null;
  }
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
  try {
    // Get historical data from NSE
    const data = await makeNseApiCall(`/chart-databyindex?index=${symbol}&indices=true`);
    
    if (!data || !data.grapthData) {
      throw new Error('Chart data not found');
    }

    return formatNseChartData(data.grapthData, timeframe);
  } catch (error) {
    console.error('Error fetching chart data from NSE:', error);
    // Return mock data as fallback
    return getMockChartData(symbol, timeframe);
  }
};

// Format NSE chart data for display
const formatNseChartData = (chartData, timeframe) => {
  const data = [];
  
  // Get the appropriate number of data points based on timeframe
  let dataPoints = 14; // Default for 1D
  if (timeframe === '1W') dataPoints = 7;
  if (timeframe === '1M') dataPoints = 30;
  
  // Take the most recent data points
  const recentData = chartData.slice(-dataPoints);
  
  recentData.forEach((point, index) => {
    const date = new Date(point[0]); // NSE uses timestamp as first element
    const time = date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
    
    data.push({
      time: time,
      price: parseFloat(point[1]) // Price is second element
    });
  });
  
  return data;
};

// Mock chart data fallback
const getMockChartData = (symbol, timeframe) => {
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
