export interface ActionItem {
  task: string;
  status: 'completed' | 'in_progress' | 'pending' | 'upcoming';
}

export interface AcademicGoal {
  title: string;
  deadline: string;
  targetScore?: string;
  targetLevel?: string;
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

export interface AcademicMilestone {
  year: string;
  goals: {
    title: string;
    targets: string[];
  }[];
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