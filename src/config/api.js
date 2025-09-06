// NSE India API Configuration
// Direct integration with NSE India's public endpoints

export const NSE_CONFIG = {
  BASE_URL: 'https://www.nseindia.com',
  API_BASE: 'https://www.nseindia.com/api',
  RATE_LIMIT: 10, // Conservative rate limit for NSE
  TIMEOUT: 15000, // 15 seconds timeout
  RETRY_ATTEMPTS: 3, // Number of retry attempts
  RETRY_DELAY: 1000 // Delay between retries in ms
};

// Alternative API configurations (fallback options)
export const ALTERNATIVE_APIS = {
  // BSE India (alternative to NSE)
  BSE_INDIA: {
    BASE_URL: 'https://www.bseindia.com',
    API_BASE: 'https://www.bseindia.com/api',
    // Usage: Similar to NSE but for BSE stocks
  },
  
  // Yahoo Finance (unofficial, may have rate limits)
  YAHOO_FINANCE: {
    BASE_URL: 'https://query1.finance.yahoo.com/v8/finance/chart',
    // Usage: `${BASE_URL}/${symbol}.NS` for NSE stocks
  },
  
  // Alpha Vantage (requires API key)
  ALPHA_VANTAGE: {
    BASE_URL: 'https://www.alphavantage.co/query',
    API_KEY: 'demo', // Replace with actual key
    RATE_LIMIT: 5 // calls per minute
  }
};

// NSE India API Setup Instructions
export const NSE_SETUP_INSTRUCTIONS = {
  NSE_INDIA: {
    steps: [
      '1. No API key required - uses NSE India public endpoints',
      '2. Direct integration with NSE website',
      '3. Real-time data from official NSE sources',
      '4. No rate limits (but be respectful with requests)',
      '5. Works for all NSE-listed stocks and indices'
    ],
    features: [
      'Real-time stock quotes from NSE',
      'Live market indices (NIFTY, SENSEX, etc.)',
      'Historical data for charts',
      'Official NSE data (most accurate)',
      'No API key or registration required',
      'Indian market focus'
    ],
    advantages: [
      '✅ Official NSE data source',
      '✅ No API key required',
      '✅ Real-time updates',
      '✅ All Indian stocks available',
      '✅ Market indices included',
      '✅ Free to use'
    ]
  },
  
  FALLBACK_OPTIONS: {
    BSE_INDIA: {
      description: 'Alternative to NSE for BSE-listed stocks',
      usage: 'Similar to NSE but for BSE exchange'
    },
    YAHOO_FINANCE: {
      description: 'Unofficial API with global coverage',
      usage: 'Add .NS suffix for NSE stocks (e.g., RELIANCE.NS)'
    },
    ALPHA_VANTAGE: {
      description: 'Paid API with rate limits',
      usage: 'Requires API key and has usage limits'
    }
  }
};
