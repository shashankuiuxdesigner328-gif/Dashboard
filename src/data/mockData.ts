import { DashboardMetrics } from '../types/dashboard';

export const mockDashboardData: DashboardMetrics = {
  edWaitTime: {
    today: 23,
    yesterday: 28,
    bestInYear: 18,
    bestOverall: 15,
    unit: 'min',
    status: 'good',
    trend: [32, 30, 28, 25, 27, 24, 23]
  },
  readmissionRate: {
    today: 8.2,
    yesterday: 7.8,
    bestInYear: 6.5,
    bestOverall: 5.9,
    unit: '%',
    status: 'warning',
    trend: [7.5, 7.2, 7.8, 8.1, 7.9, 8.0, 8.2]
  },
  fallIncidents: {
    today: 2,
    yesterday: 3,
    bestInYear: 0,
    bestOverall: 0,
    unit: '',
    status: 'good',
    trend: [4, 3, 2, 3, 1, 3, 2]
  },
  dischargeProcess: {
    today: 92,
    yesterday: 89,
    bestInYear: 96,
    bestOverall: 98,
    unit: '%',
    status: 'good',
    trend: [88, 87, 90, 89, 91, 89, 92]
  },
  headcount: {
    today: 2847,
    yesterday: 2845,
    bestInYear: 2890,
    bestOverall: 2890,
    unit: '',
    status: 'good',
    trend: [2820, 2830, 2835, 2840, 2842, 2845, 2847]
  },
  expansion: {
    today: 78,
    yesterday: 75,
    bestInYear: 78,
    bestOverall: 78,
    unit: '%',
    status: 'good',
    trend: [65, 68, 70, 72, 74, 75, 78]
  },
  priorities: {
    today: 12,
    yesterday: 15,
    bestInYear: 8,
    bestOverall: 5,
    unit: '',
    status: 'warning',
    trend: [18, 17, 16, 14, 15, 15, 12]
  },
  saudizationRate: {
    today: 67.8,
    yesterday: 67.5,
    bestInYear: 68.2,
    bestOverall: 68.2,
    unit: '%',
    status: 'warning',
    trend: [66.5, 66.8, 67.0, 67.2, 67.3, 67.5, 67.8]
  }
};
