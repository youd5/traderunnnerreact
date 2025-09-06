import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, BarChart3, DollarSign, Star, Target } from 'lucide-react';

const PortfolioPage = () => {
  const [activeTab, setActiveTab] = useState('mutual-funds');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  // Helper component for section titles
  const SectionTitle = ({ title, subtitle }) => (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-semibold font-serif text-gray-800 tracking-wide">{title}</h2>
      <p className="mt-2 text-xl text-gray-500">{subtitle}</p>
    </div>
  );

  // Mutual Funds data
  const mutualFunds = [
    {
      name: 'HDFC Top 100 Fund',
      category: 'Large Cap',
      nav: 1256.45,
      change: 23.45,
      changePercent: 1.90,
      aum: '₹12,456 Cr',
      expenseRatio: '1.25%',
      rating: 4.5,
      minSip: '₹500',
      returns1Y: '18.45%',
      returns3Y: '15.67%',
      returns5Y: '12.34%'
    },
    {
      name: 'SBI Bluechip Fund',
      category: 'Large Cap',
      nav: 89.67,
      change: 1.23,
      changePercent: 1.39,
      aum: '₹8,234 Cr',
      expenseRatio: '1.15%',
      rating: 4.3,
      minSip: '₹500',
      returns1Y: '16.78%',
      returns3Y: '14.23%',
      returns5Y: '11.89%'
    },
    {
      name: 'ICICI Prudential Technology Fund',
      category: 'Sectoral',
      nav: 234.56,
      change: 8.90,
      changePercent: 3.94,
      aum: '₹3,456 Cr',
      expenseRatio: '1.45%',
      rating: 4.7,
      minSip: '₹1,000',
      returns1Y: '24.56%',
      returns3Y: '19.34%',
      returns5Y: '16.78%'
    },
    {
      name: 'Axis Midcap Fund',
      category: 'Mid Cap',
      nav: 78.34,
      change: 2.45,
      changePercent: 3.23,
      aum: '₹5,678 Cr',
      expenseRatio: '1.35%',
      rating: 4.4,
      minSip: '₹500',
      returns1Y: '22.34%',
      returns3Y: '17.89%',
      returns5Y: '14.56%'
    }
  ];

  // Large Cap Stocks data
  const largeCapStocks = [
    {
      symbol: 'RELIANCE',
      name: 'Reliance Industries Ltd.',
      price: 2456.80,
      change: 45.20,
      changePercent: 1.87,
      volume: '2.1M',
      marketCap: '16.6L Cr',
      sector: 'Oil & Gas',
      pe: 24.5,
      dividend: '2.1%'
    },
    {
      symbol: 'TCS',
      name: 'Tata Consultancy Services',
      price: 3785.50,
      change: 67.30,
      changePercent: 1.81,
      volume: '1.8M',
      marketCap: '13.8L Cr',
      sector: 'IT',
      pe: 28.3,
      dividend: '1.8%'
    },
    {
      symbol: 'HDFCBANK',
      name: 'HDFC Bank Ltd.',
      price: 1654.25,
      change: 23.45,
      changePercent: 1.44,
      volume: '3.2M',
      marketCap: '12.1L Cr',
      sector: 'Banking',
      pe: 18.7,
      dividend: '1.2%'
    },
    {
      symbol: 'INFY',
      name: 'Infosys Ltd.',
      price: 1456.90,
      change: 18.75,
      changePercent: 1.30,
      volume: '2.8M',
      marketCap: '6.1L Cr',
      sector: 'IT',
      pe: 26.4,
      dividend: '2.3%'
    }
  ];

  // Small Cap Stocks data
  const smallCapStocks = [
    {
      symbol: 'BALRAMCHIN',
      name: 'Balrampur Chini Mills Ltd.',
      price: 456.75,
      change: 23.45,
      changePercent: 5.42,
      volume: '1.2M',
      marketCap: '₹8,456 Cr',
      sector: 'Sugar',
      pe: 15.6,
      dividend: '1.8%'
    },
    {
      symbol: 'TATACOFFEE',
      name: 'Tata Coffee Ltd.',
      price: 234.50,
      change: 12.30,
      changePercent: 5.54,
      volume: '890K',
      marketCap: '₹3,234 Cr',
      sector: 'FMCG',
      pe: 18.9,
      dividend: '2.1%'
    },
    {
      symbol: 'ORIENTALBANK',
      name: 'Oriental Bank of Commerce',
      price: 89.45,
      change: 4.56,
      changePercent: 5.38,
      volume: '2.1M',
      marketCap: '₹5,678 Cr',
      sector: 'Banking',
      pe: 12.3,
      dividend: '0.8%'
    },
    {
      symbol: 'JUBLFOOD',
      name: 'Jubilant FoodWorks Ltd.',
      price: 1234.60,
      change: 67.80,
      changePercent: 5.81,
      volume: '456K',
      marketCap: '₹7,890 Cr',
      sector: 'FMCG',
      pe: 45.2,
      dividend: '0.5%'
    }
  ];

  // Mutual Fund Card Component
  const MutualFundCard = ({ fund }) => {
    const isPositive = fund.change >= 0;
    const trendColor = isPositive ? 'text-green-600' : 'text-red-600';

    return (
      <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800">{fund.name}</h3>
            <p className="text-sm text-gray-600">{fund.category}</p>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < Math.floor(fund.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
              ))}
              <span className="ml-2 text-sm text-gray-600">{fund.rating}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-800">₹{fund.nav}</div>
            <div className={`text-sm font-semibold ${trendColor}`}>
              {isPositive ? '+' : ''}₹{fund.change} ({isPositive ? '+' : ''}{fund.changePercent}%)
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div>
            <span className="text-gray-600">AUM:</span>
            <span className="font-semibold ml-1">{fund.aum}</span>
          </div>
          <div>
            <span className="text-gray-600">Expense Ratio:</span>
            <span className="font-semibold ml-1">{fund.expenseRatio}</span>
          </div>
          <div>
            <span className="text-gray-600">Min SIP:</span>
            <span className="font-semibold ml-1">{fund.minSip}</span>
          </div>
          <div>
            <span className="text-gray-600">1Y Returns:</span>
            <span className="font-semibold text-green-600 ml-1">{fund.returns1Y}</span>
          </div>
        </div>

        <div className="flex justify-between text-xs text-gray-600">
          <span>3Y: {fund.returns3Y}</span>
          <span>5Y: {fund.returns5Y}</span>
        </div>
      </div>
    );
  };

  // Stock Card Component
  const StockCard = ({ stock }) => {
    const isPositive = stock.change >= 0;
    const trendColor = isPositive ? 'text-green-600' : 'text-red-600';

    return (
      <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800">{stock.symbol}</h3>
            <p className="text-sm text-gray-600">{stock.name}</p>
            <span className="inline-block px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full mt-1">
              {stock.sector}
            </span>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-800">₹{stock.price}</div>
            <div className={`text-sm font-semibold ${trendColor}`}>
              {isPositive ? '+' : ''}₹{stock.change} ({isPositive ? '+' : ''}{stock.changePercent}%)
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600">Market Cap:</span>
            <span className="font-semibold ml-1">{stock.marketCap}</span>
          </div>
          <div>
            <span className="text-gray-600">P/E Ratio:</span>
            <span className="font-semibold ml-1">{stock.pe}</span>
          </div>
          <div>
            <span className="text-gray-600">Volume:</span>
            <span className="font-semibold ml-1">{stock.volume}</span>
          </div>
          <div>
            <span className="text-gray-600">Dividend:</span>
            <span className="font-semibold text-green-600 ml-1">{stock.dividend}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&auto=format&fit=crop&q=80"
          alt="Portfolio Management"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-6">
            Investment Portfolio
          </h1>
          <p className="text-xl md:text-2xl">
            Diversify your investments across mutual funds and stocks
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveTab('mutual-funds')}
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                activeTab === 'mutual-funds'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Mutual Funds
            </button>
            <button
              onClick={() => setActiveTab('large-cap')}
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                activeTab === 'large-cap'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Large Cap Stocks
            </button>
            <button
              onClick={() => setActiveTab('small-cap')}
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                activeTab === 'small-cap'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Small Cap Stocks
            </button>
          </div>
        </div>
      </section>

      {/* Mutual Funds Section */}
      {activeTab === 'mutual-funds' && (
        <section className="py-20">
          <div className="container mx-auto px-6">
            <SectionTitle 
              title="Top Performing Mutual Funds" 
              subtitle="Invest in professionally managed funds for diversified growth" 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {mutualFunds.map((fund, index) => (
                <MutualFundCard key={index} fund={fund} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Large Cap Stocks Section */}
      {activeTab === 'large-cap' && (
        <section className="py-20">
          <div className="container mx-auto px-6">
            <SectionTitle 
              title="Large Cap Stocks" 
              subtitle="Invest in established companies with stable growth potential" 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {largeCapStocks.map((stock, index) => (
                <StockCard key={index} stock={stock} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Small Cap Stocks Section */}
      {activeTab === 'small-cap' && (
        <section className="py-20">
          <div className="container mx-auto px-6">
            <SectionTitle 
              title="Small Cap Stocks" 
              subtitle="High growth potential with higher risk-reward ratio" 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {smallCapStocks.map((stock, index) => (
                <StockCard key={index} stock={stock} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-semibold mb-6">
            Ready to Start Investing?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Build a diversified portfolio with our expert recommendations and start your investment journey today.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
            Get Investment Advice
          </button>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
