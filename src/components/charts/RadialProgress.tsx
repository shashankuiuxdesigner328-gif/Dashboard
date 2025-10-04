import React from 'react';

interface RadialProgressProps {
  value: number;
  max: number;
  status: 'good' | 'warning' | 'critical';
}

const RadialProgress: React.FC<RadialProgressProps> = ({ value, max, status }) => {
  const percentage = Math.min((value / max) * 100, 100);
  const circumference = 2 * Math.PI * 35;
  const offset = circumference - (percentage / 100) * circumference;

  const statusColors = {
    good: '#10b981',
    warning: '#f59e0b',
    critical: '#ef4444'
  };

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle
        cx="50"
        cy="50"
        r="35"
        fill="none"
        stroke="#e5e7eb"
        strokeWidth="8"
      />

      <circle
        cx="50"
        cy="50"
        r="35"
        fill="none"
        stroke={statusColors[status]}
        strokeWidth="8"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 50 50)"
        style={{ transition: 'stroke-dashoffset 0.5s ease' }}
      />

      <text
        x="50"
        y="50"
        textAnchor="middle"
        dy="0.3em"
        fontSize="20"
        fontWeight="bold"
        fill={statusColors[status]}
      >
        {value.toFixed(0)}%
      </text>
    </svg>
  );
};

export default RadialProgress;
