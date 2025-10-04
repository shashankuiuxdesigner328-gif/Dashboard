import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { KPIData } from '../types/dashboard';

interface KPICardProps {
  title: string;
  icon: React.ReactNode;
  data: KPIData;
  iconBgColor: string;
  chartComponent: React.ReactNode;
}

const KPICard: React.FC<KPICardProps> = ({ title, icon, data, iconBgColor, chartComponent }) => {
  const { today, yesterday, bestInYear, bestOverall, unit, status } = data;

  const changePercent = yesterday !== 0
    ? ((today - yesterday) / yesterday * 100).toFixed(1)
    : 0;

  const isPositiveChange = today > yesterday;
  const isNegativeChange = today < yesterday;

  const statusColors = {
    good: 'bg-emerald-50 border-emerald-200',
    warning: 'bg-amber-50 border-amber-200',
    critical: 'bg-rose-50 border-rose-200'
  };

  const statusDots = {
    good: 'bg-emerald-500',
    warning: 'bg-amber-500',
    critical: 'bg-rose-500'
  };

  return (
    <div className={`relative bg-white rounded-lg shadow-sm border-2 ${statusColors[status]} p-4 hover:shadow-md transition-shadow duration-200 flex flex-col h-full`}>
      {/* Status Indicator */}
      <div className="absolute top-3 right-3">
        <div className={`w-2.5 h-2.5 rounded-full ${statusDots[status]} animate-pulse`}></div>
      </div>

      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        <div className={`${iconBgColor} p-2 rounded-lg`}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xs font-medium text-gray-600 uppercase tracking-wide">{title}</h3>
        </div>
      </div>

      {/* Main Metric */}
      <div className="mb-3">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-gray-900">{today}</span>
          <span className="text-base text-gray-500">{unit}</span>
        </div>

        {/* Change Indicator */}
        <div className="flex items-center gap-1.5 mt-1">
          {isPositiveChange && (
            <>
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-xs font-medium text-emerald-600">+{changePercent}%</span>
            </>
          )}
          {isNegativeChange && (
            <>
              <TrendingDown className="w-3.5 h-3.5 text-rose-600" />
              <span className="text-xs font-medium text-rose-600">{changePercent}%</span>
            </>
          )}
          {!isPositiveChange && !isNegativeChange && (
            <>
              <Minus className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-xs font-medium text-gray-400">No change</span>
            </>
          )}
          <span className="text-xs text-gray-500">vs yesterday</span>
        </div>
      </div>

      {/* Mini Chart */}
      <div className="mb-3 h-12 flex-shrink-0">
        {chartComponent}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-200 mt-auto">
        <div>
          <p className="text-xs text-gray-500 mb-0.5">Yesterday</p>
          <p className="text-xs font-semibold text-gray-900">{yesterday}{unit}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-0.5">Best (Year)</p>
          <p className="text-xs font-semibold text-gray-900">{bestInYear}{unit}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-0.5">Best (All)</p>
          <p className="text-xs font-semibold text-gray-900">{bestOverall}{unit}</p>
        </div>
      </div>
    </div>
  );
};

export default KPICard;
