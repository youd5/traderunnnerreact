import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, TrendingUp, BarChart3, Target, Activity } from 'lucide-react';
import MarketOverview from './MarketOverview';
import BreakoutStocks from './BreakoutStocks';
import StockChart from './StockChart';
import StockCard from './StockCard';

const HomePage = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('1D');
  const [watchlist, setWatchlist] = useState([]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const scrollToMarket = () => {
    const marketSection = document.getElementById('market-overview');
    if (marketSection) {
      marketSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Helper component for section titles
  const SectionTitle = ({ title, subtitle }) => (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-semibold font-serif text-gray-800 tracking-wide">{title}</h2>
      <p className="mt-2 text-xl text-gray-500">{subtitle}</p>
    </div>
  );

  // Top performing Indian stocks data
  const topStocks = [
    { symbol: 'RELIANCE', name: 'Reliance Industries Ltd.', price: 2456.80, change: 45.20, changePercent: 1.87, volume: '2.1M', marketCap: '16.6L Cr', trend: 'up', sector: 'Oil & Gas' },
    { symbol: 'TCS', name: 'Tata Consultancy Services', price: 3785.50, change: 67.30, changePercent: 1.81, volume: '1.8M', marketCap: '13.8L Cr', trend: 'up', sector: 'IT' },
    { symbol: 'HDFCBANK', name: 'HDFC Bank Ltd.', price: 1654.25, change: 23.45, changePercent: 1.44, volume: '3.2M', marketCap: '12.1L Cr', trend: 'up', sector: 'Banking' },
    { symbol: 'INFY', name: 'Infosys Ltd.', price: 1456.90, change: 18.75, changePercent: 1.30, volume: '2.8M', marketCap: '6.1L Cr', trend: 'up', sector: 'IT' },
    { symbol: 'HINDUNILVR', name: 'Hindustan Unilever Ltd.', price: 2654.30, change: 89.45, changePercent: 3.49, volume: '1.2M', marketCap: '6.2L Cr', trend: 'up', sector: 'FMCG' },
    { symbol: 'ITC', name: 'ITC Ltd.', price: 456.75, change: 12.30, changePercent: 2.77, volume: '4.5M', marketCap: '5.7L Cr', trend: 'up', sector: 'FMCG' }
  ];

  const marketInsights = [
    { id: 1, title: 'Digital India', description: 'IT and digital transformation companies are driving growth with government initiatives and enterprise adoption.', icon: '💻', color: 'blue' },
    { id: 2, title: 'Green Energy', description: 'Renewable energy sector shows strong momentum with government support and clean tech adoption.', icon: '🌱', color: 'green' },
    { id: 3, title: 'Banking & Finance', description: 'Indian banking sector is experiencing robust growth with digital transformation and financial inclusion.', icon: '🏦', color: 'purple' },
  ];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <div className="relative h-[85vh] w-full flex items-center justify-center text-white text-center">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&auto=format&fit=crop&q=80"
          alt="Indian Stock Market Dashboard"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-serif font-semibold leading-tight tracking-wide mb-6">
            Indian Stock Market Intelligence
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Track NSE & BSE markets, analyze Indian stocks, and discover breakout opportunities with our advanced analytics platform.
          </p>
          <button 
            onClick={scrollToMarket}
            className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition-colors"
          >
            Explore Markets
          </button>
        </div>
      </div>

      {/* Market Overview Section */}
      <section id="market-overview" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <SectionTitle title="Market Overview" subtitle="Real-time market data and comprehensive analysis at your fingertips." />
          <div className="mb-12">
            <MarketOverview />
          </div>
        </div>
      </section>

      {/* Top Stocks Section */}
      <section id="top-stocks" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle title="Top Performing Stocks" subtitle="Track the market leaders and their performance metrics." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {topStocks.map(stock => (
              <StockCard key={stock.symbol} {...stock} />
            ))}
          </div>
          
          {/* Stock Chart */}
          <div className="mb-12">
            <StockChart symbol="RELIANCE" />
          </div>
        </div>
      </section>

      {/* Breakout Stocks Section */}
      <section id="breakout-stocks" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <BreakoutStocks />
        </div>
      </section>

      {/* Market Insights Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle title="Market Insights" subtitle="Stay ahead with expert analysis and market trends." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketInsights.map(insight => (
              <div key={insight.id} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{insight.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{insight.title}</h3>
                <p className="text-gray-600 leading-relaxed">{insight.description}</p>
                <button className="mt-4 inline-flex items-center text-blue-700 font-semibold group hover:text-blue-800 transition-colors">
                  Read Analysis
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
