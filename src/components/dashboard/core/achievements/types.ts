import { LucideIcon } from 'lucide-react';

export interface Achievement {
  name: string;
  level?: string;
  award?: string;
  date?: string;
  position?: string;
  period?: string;
  impact?: string;
  details: string[];
}

export interface AchievementCategory {
  category: string;
  icon: LucideIcon;
  achievements: Achievement[];
}