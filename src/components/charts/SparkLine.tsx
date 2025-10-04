import React from 'react';

interface SparkLineProps {
  data: number[];
  status: 'good' | 'warning' | 'critical';
}

const SparkLine: React.FC<SparkLineProps> = ({ data, status }) => {
  if (!data || data.length === 0) return null;

  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = 100 - ((value - min) / range) * 80 - 10;
    return `${x},${y}`;
  }).join(' ');

  const statusColors = {
    good: '#10b981',
    warning: '#f59e0b',
    critical: '#ef4444'
  };

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
      <polyline
        points={points}
        fill="none"
        stroke={statusColors[status]}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      {data.map((value, index) => {
        const x = (index / (data.length - 1)) * 100;
        const y = 100 - ((value - min) / range) * 80 - 10;
        return (
          <circle
            key={index}
            cx={x}
            cy={y}
            r="2"
            fill={statusColors[status]}
            vectorEffect="non-scaling-stroke"
          />
        );
      })}
    </svg>
  );
};

export default SparkLine;
