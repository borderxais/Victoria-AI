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

export interface Course {
  name: string;
  grade: string;
  highlights: string[];
}

export interface StandardizedTest {
  name: string;
  score: string;
  date: string;
  percentile: string;
}

export interface StudentProfileData {
  name: string;
  grade: string;
  age: number;
  interests: string[];
  academicProgress: {
    currentGPA: string;
    standardizedTests: StandardizedTest[];
    currentCourses: Course[];
  };
  extracurricularProgress: {
    majorAchievements: AchievementCategory[];
  };
}