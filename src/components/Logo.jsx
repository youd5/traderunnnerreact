import React from 'react';

const Logo = ({ className = "h-10 w-10" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="url(#gradient)"
          stroke="#1e40af"
          strokeWidth="2"
        />
        
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1e40af" />
          </linearGradient>
        </defs>
        
        {/* T Letter */}
        <text
          x="20"
          y="40"
          fontSize="24"
          fontWeight="bold"
          fill="white"
          fontFamily="Arial, sans-serif"
        >
          T
        </text>
        
        {/* C Letter */}
        <text
          x="45"
          y="40"
          fontSize="24"
          fontWeight="bold"
          fill="white"
          fontFamily="Arial, sans-serif"
        >
          C
        </text>
        
        {/* R Letter */}
        <text
          x="70"
          y="40"
          fontSize="24"
          fontWeight="bold"
          fill="white"
          fontFamily="Arial, sans-serif"
        >
          R
        </text>
        
        {/* Small chart line decoration */}
        <path
          d="M15 70 L25 65 L35 75 L45 60 L55 80 L65 70 L75 85 L85 75"
          stroke="white"
          strokeWidth="2"
          fill="none"
          opacity="0.8"
        />
        
        {/* Small dots for chart points */}
        <circle cx="25" cy="65" r="2" fill="white" opacity="0.8" />
        <circle cx="35" cy="75" r="2" fill="white" opacity="0.8" />
        <circle cx="45" cy="60" r="2" fill="white" opacity="0.8" />
        <circle cx="55" cy="80" r="2" fill="white" opacity="0.8" />
        <circle cx="65" cy="70" r="2" fill="white" opacity="0.8" />
        <circle cx="75" cy="85" r="2" fill="white" opacity="0.8" />
      </svg>
    </div>
  );
};

export default Logo;
