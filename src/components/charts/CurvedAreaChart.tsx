import React from 'react';

interface CurvedAreaChartProps {
  data: number[];
  status: 'good' | 'warning' | 'critical';
}

const CurvedAreaChart: React.FC<CurvedAreaChartProps> = ({ data, status }) => {
  if (!data || data.length === 0) return null;

  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = 100 - ((value - min) / range) * 70 - 15;
    return { x, y };
  });

  const createSmoothPath = (points: { x: number; y: number }[]) => {
    if (points.length < 2) return '';

    let path = `M ${points[0].x},${points[0].y}`;

    for (let i = 0; i < points.length - 1; i++) {
      const current = points[i];
      const next = points[i + 1];
      const controlX = (current.x + next.x) / 2;

      path += ` Q ${controlX},${current.y} ${controlX},${(current.y + next.y) / 2}`;
      path += ` Q ${controlX},${next.y} ${next.x},${next.y}`;
    }

    return path;
  };

  const smoothPath = createSmoothPath(points);

  const statusColors = {
    good: '#10b981',
    warning: '#f59e0b',
    critical: '#ef4444'
  };

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
      <defs>
        <linearGradient id={`curved-gradient-${status}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={statusColors[status]} stopOpacity="0.4" />
          <stop offset="100%" stopColor={statusColors[status]} stopOpacity="0.05" />
        </linearGradient>
      </defs>

      <path
        d={`${smoothPath} L 100,100 L 0,100 Z`}
        fill={`url(#curved-gradient-${status})`}
      />

      <path
        d={smoothPath}
        fill="none"
        stroke={statusColors[status]}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CurvedAreaChart;
