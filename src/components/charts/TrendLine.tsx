import React from 'react';

interface TrendLineProps {
  data: number[];
  status: 'good' | 'warning' | 'critical';
}

const TrendLine: React.FC<TrendLineProps> = ({ data, status }) => {
  if (!data || data.length === 0) return null;

  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = 100 - ((value - min) / range) * 70 - 15;
    return { x, y };
  });

  const statusColors = {
    good: '#10b981',
    warning: '#f59e0b',
    critical: '#ef4444'
  };

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
      <defs>
        <linearGradient id={`trend-gradient-${status}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={statusColors[status]} stopOpacity="0.4" />
          <stop offset="50%" stopColor={statusColors[status]} stopOpacity="0.8" />
          <stop offset="100%" stopColor={statusColors[status]} stopOpacity="1" />
        </linearGradient>
      </defs>

      {points.map((point, index) => {
        if (index === 0) return null;
        const prev = points[index - 1];
        return (
          <line
            key={index}
            x1={prev.x}
            y1={prev.y}
            x2={point.x}
            y2={point.y}
            stroke={`url(#trend-gradient-${status})`}
            strokeWidth="3"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        );
      })}

      {points.map((point, index) => (
        <circle
          key={index}
          cx={point.x}
          cy={point.y}
          r="3"
          fill={statusColors[status]}
          stroke="white"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
};

export default TrendLine;
