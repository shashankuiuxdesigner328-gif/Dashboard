export interface KPIData {
  today: number;
  yesterday: number;
  bestInYear: number;
  bestOverall: number;
  unit: string;
  status: 'good' | 'warning' | 'critical';
  trend: number[];
}

export interface DashboardMetrics {
  edWaitTime: KPIData;
  readmissionRate: KPIData;
  fallIncidents: KPIData;
  dischargeProcess: KPIData;
  headcount: KPIData;
  expansion: KPIData;
  priorities: KPIData;
  saudizationRate: KPIData;
}
