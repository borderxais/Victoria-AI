export interface DreamSchool {
  name: string;
  currentFit: number;
  requirements: {
    academic: number;
    extracurricular: number;
    specialTalents: number;
  };
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

export interface StudentData {
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
  dreamSchools: DreamSchool[];
  roadmap: RoadmapData;
}

export interface AchievementCategory {
  category: string;
  achievements: Achievement[];
}

export interface Achievement {
  name: string;
  level?: string;
  award?: string;
  date?: string;
  position?: string;
  period?: string;
  impact?: string;
}

export interface RoadmapData {
  shortTerm: {
    academicGoals: AcademicGoal[];
    extracurricularGoals: ExtracurricularGoal[];
  };
  longTerm: {
    academicMilestones: AcademicMilestone[];
  };
}

export interface AcademicGoal {
  title: string;
  deadline: string;
  targetScore?: string;
  currentProgress: number;
  actionItems: ActionItem[];
}

export interface ExtracurricularGoal {
  title: string;
  deadline: string;
  target: string;
  currentProgress: number;
  actionItems: ActionItem[];
}

export interface ActionItem {
  task: string;
  status: string;
}

export interface AcademicMilestone {
  year: string;
  goals: {
    title: string;
    targets: string[];
  }[];
}