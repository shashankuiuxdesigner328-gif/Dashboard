import React from 'react';

interface AreaChartProps {
  data: number[];
  status: 'good' | 'warning' | 'critical';
}

const AreaChart: React.FC<AreaChartProps> = ({ data, status }) => {
  if (!data || data.length === 0) return null;

  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = 100 - ((value - min) / range) * 85 - 5;
    return { x, y };
  });

  const pathData = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x},${p.y}`).join(' ');

  const statusColors = {
    good: '#10b981',
    warning: '#f59e0b',
    critical: '#ef4444'
  };

  const statusFills = {
    good: 'rgba(16, 185, 129, 0.2)',
    warning: 'rgba(245, 158, 11, 0.2)',
    critical: 'rgba(239, 68, 68, 0.2)'
  };

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
      <defs>
        <linearGradient id={`area-gradient-${status}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={statusColors[status]} stopOpacity="0.4" />
          <stop offset="100%" stopColor={statusColors[status]} stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <path
        d={`${pathData} L 100,100 L 0,100 Z`}
        fill={`url(#area-gradient-${status})`}
        stroke="none"
      />
      <path
        d={pathData}
        fill="none"
        stroke={statusColors[status]}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};

export default AreaChart;
