import {
  Clock,
  Activity,
  AlertTriangle,
  FileCheck,
  Users,
  TrendingUp,
  Target,
  Award
} from 'lucide-react';
import KPICard from './components/KPICard';
import { mockDashboardData } from './data/mockData';
import LineChart from './components/charts/LineChart';
import BarChart from './components/charts/BarChart';
import SparkLine from './components/charts/SparkLine';
import AreaChart from './components/charts/AreaChart';
import StepChart from './components/charts/StepChart';
import RadialProgress from './components/charts/RadialProgress';
import CurvedAreaChart from './components/charts/CurvedAreaChart';
import TrendLine from './components/charts/TrendLine';

function App() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm flex-shrink-0">
        <div className="max-w-[1800px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Healthcare Operations Dashboard</h1>
              <p className="text-xs text-gray-600 mt-0.5">Executive Performance Overview</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-700">{currentDate}</p>
              <p className="text-xs text-gray-500">Real-time monitoring</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Dashboard */}
      <main className="flex-1 overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-6 py-4 h-full">
          {/* KPI Grid */}
          <div className="grid grid-cols-4 gap-4 h-full auto-rows-fr">
          {/* ED Wait Time */}
          <KPICard
            title="ED Wait Time"
            icon={<Clock className="w-6 h-6 text-blue-600" />}
            data={mockDashboardData.edWaitTime}
            iconBgColor="bg-blue-100"
            chartComponent={<LineChart data={mockDashboardData.edWaitTime.trend} status={mockDashboardData.edWaitTime.status} />}
          />

          {/* Readmission Rate */}
          <KPICard
            title="Readmission Rate"
            icon={<Activity className="w-6 h-6 text-orange-600" />}
            data={mockDashboardData.readmissionRate}
            iconBgColor="bg-orange-100"
            chartComponent={<AreaChart data={mockDashboardData.readmissionRate.trend} status={mockDashboardData.readmissionRate.status} />}
          />

          {/* Fall Incidents */}
          <KPICard
            title="Fall Incidents"
            icon={<AlertTriangle className="w-6 h-6 text-red-600" />}
            data={mockDashboardData.fallIncidents}
            iconBgColor="bg-red-100"
            chartComponent={<BarChart data={mockDashboardData.fallIncidents.trend} status={mockDashboardData.fallIncidents.status} />}
          />

          {/* Discharge Process */}
          <KPICard
            title="Discharge Process"
            icon={<FileCheck className="w-6 h-6 text-emerald-600" />}
            data={mockDashboardData.dischargeProcess}
            iconBgColor="bg-emerald-100"
            chartComponent={<RadialProgress value={mockDashboardData.dischargeProcess.today} max={100} status={mockDashboardData.dischargeProcess.status} />}
          />

          {/* Headcount */}
          <KPICard
            title="Monthly Headcount"
            icon={<Users className="w-6 h-6 text-purple-600" />}
            data={mockDashboardData.headcount}
            iconBgColor="bg-purple-100"
            chartComponent={<StepChart data={mockDashboardData.headcount.trend} status={mockDashboardData.headcount.status} />}
          />

          {/* Expansion & Growth */}
          <KPICard
            title="Expansion & Growth"
            icon={<TrendingUp className="w-6 h-6 text-cyan-600" />}
            data={mockDashboardData.expansion}
            iconBgColor="bg-cyan-100"
            chartComponent={<SparkLine data={mockDashboardData.expansion.trend} status={mockDashboardData.expansion.status} />}
          />

          {/* Priorities & Risk */}
          <KPICard
            title="Priorities & Risk"
            icon={<Target className="w-6 h-6 text-rose-600" />}
            data={mockDashboardData.priorities}
            iconBgColor="bg-rose-100"
            chartComponent={<CurvedAreaChart data={mockDashboardData.priorities.trend} status={mockDashboardData.priorities.status} />}
          />

          {/* Saudization Rate */}
          <KPICard
            title="Saudization Rate"
            icon={<Award className="w-6 h-6 text-teal-600" />}
            data={mockDashboardData.saudizationRate}
            iconBgColor="bg-teal-100"
            chartComponent={<TrendLine data={mockDashboardData.saudizationRate.trend} status={mockDashboardData.saudizationRate.status} />}
          />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 flex-shrink-0">
        <div className="max-w-[1800px] mx-auto px-6 py-2">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span>Good</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                <span>Warning</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                <span>Critical</span>
              </div>
            </div>
            <p>Last updated: {new Date().toLocaleTimeString()} • Refreshes every 5 minutes</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
