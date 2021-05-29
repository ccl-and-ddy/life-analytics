interface UserData {
  id: string;
  dashboards: Dashboard[];
}

interface Dashboard {
  id: string;
  name: string; // e.g. "run log"
}

interface DailyDashboard extends Dashboard {
  days: DailyDashboardDay[];
}

type Mood = 'happy'|'neutral'|'sad';
interface DailyDashboardDay {
  date: Date;
  mood: Mood;
}

type AmountInputMethod = 'time_range'|'amount';

interface AmountDashboard extends Dashboard {
  days: AmountDashboardDay[];
  unit: string; // e.g. km or hours
  inputMethod: AmountInputMethod;
}

interface AmountDashboardDay {
  date: Date;
  amount: number;
}

