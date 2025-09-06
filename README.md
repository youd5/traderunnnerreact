# StockTracker - Advanced Stock Market Analysis

A modern React-based stock market analysis and tracking platform built with Vite, Tailwind CSS, and Recharts. Track markets, analyze stock performance, and discover breakout opportunities with an intuitive dashboard interface.

## Features

- **Market Overview**: Real-time market indices and sector performance tracking
- **Stock Analysis**: Comprehensive stock cards with price, volume, and market cap data
- **Breakout Detection**: AI-powered breakout stock suggestions with confidence ratings
- **Interactive Charts**: Beautiful, responsive charts using Recharts library
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Modern UI**: Clean, professional interface with smooth animations

## Tech Stack

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Chart library for data visualization
- **React Router** - Client-side routing
- **Lucide React** - Icon library
- **Axios** - HTTP client for API calls

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd traderunnnerreact
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── HomePage.jsx          # Main dashboard page
│   ├── Header.jsx            # Navigation header
│   ├── Footer.jsx            # Footer component
│   ├── StockCard.jsx         # Individual stock display card
│   ├── MarketOverview.jsx    # Market indices and sectors
│   ├── BreakoutStocks.jsx    # Breakout stock suggestions
│   └── StockChart.jsx        # Interactive stock charts
├── services/
│   └── stockApi.js           # Mock API service for stock data
├── App.jsx                   # Main app component
├── main.jsx                  # App entry point
└── index.css                 # Global styles
```

## Features Overview

### Dashboard
- Hero section with market overview
- Top performing stocks grid
- Interactive stock charts
- Market insights and trends

### Stock Analysis
- Real-time price tracking
- Volume and market cap data
- Sector classification
- Performance metrics

### Breakout Detection
- AI-powered stock suggestions
- Confidence ratings
- Target price predictions
- Breakout reason analysis

## Customization

The application uses mock data for demonstration purposes. To integrate with real stock market APIs:

1. Update `src/services/stockApi.js` with actual API endpoints
2. Add API keys and authentication
3. Implement real-time data fetching
4. Add error handling and loading states

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.