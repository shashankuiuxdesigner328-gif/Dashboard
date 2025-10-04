import React from 'react';

interface LineChartProps {
  data: number[];
  status: 'good' | 'warning' | 'critical';
}

const LineChart: React.FC<LineChartProps> = ({ data, status }) => {
  if (!data || data.length === 0) return null;

  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = 100 - ((value - min) / range) * 100;
    return `${x},${y}`;
  }).join(' ');

  const statusColors = {
    good: '#10b981',
    warning: '#f59e0b',
    critical: '#ef4444'
  };

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
      <defs>
        <linearGradient id={`line-gradient-${status}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={statusColors[status]} stopOpacity="0.3" />
          <stop offset="100%" stopColor={statusColors[status]} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={`0,100 ${points} 100,100`} fill={`url(#line-gradient-${status})`} />
      <polyline points={points} fill="none" stroke={statusColors[status]} strokeWidth="2" vectorEffect="non-scaling-stroke" />
    </svg>
  );
};

export default LineChart;
