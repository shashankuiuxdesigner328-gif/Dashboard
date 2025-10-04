import React from 'react';

interface StepChartProps {
  data: number[];
  status: 'good' | 'warning' | 'critical';
}

const StepChart: React.FC<StepChartProps> = ({ data, status }) => {
  if (!data || data.length === 0) return null;

  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const statusColors = {
    good: '#10b981',
    warning: '#f59e0b',
    critical: '#ef4444'
  };

  const barWidth = 100 / data.length;

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
      <defs>
        <linearGradient id={`step-gradient-${status}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={statusColors[status]} stopOpacity="0.8" />
          <stop offset="100%" stopColor={statusColors[status]} stopOpacity="0.3" />
        </linearGradient>
      </defs>
      {data.map((value, index) => {
        const height = ((value - min) / range) * 90;
        const x = index * barWidth;
        const y = 100 - height;

        return (
          <rect
            key={index}
            x={x}
            y={y}
            width={barWidth}
            height={height}
            fill={`url(#step-gradient-${status})`}
            stroke={statusColors[status]}
            strokeWidth="0.5"
          />
        );
      })}
    </svg>
  );
};

export default StepChart;
