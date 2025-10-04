import React from 'react';

interface BarChartProps {
  data: number[];
  status: 'good' | 'warning' | 'critical';
}

const BarChart: React.FC<BarChartProps> = ({ data, status }) => {
  if (!data || data.length === 0) return null;

  const max = Math.max(...data);

  const statusColors = {
    good: '#10b981',
    warning: '#f59e0b',
    critical: '#ef4444'
  };

  const barWidth = 100 / data.length;
  const gap = barWidth * 0.2;

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
      {data.map((value, index) => {
        const height = (value / max) * 90;
        const x = index * barWidth + gap / 2;
        const y = 100 - height;

        return (
          <rect
            key={index}
            x={x}
            y={y}
            width={barWidth - gap}
            height={height}
            fill={statusColors[status]}
            opacity={0.7 + (index / data.length) * 0.3}
            rx="1"
          />
        );
      })}
    </svg>
  );
};

export default BarChart;
