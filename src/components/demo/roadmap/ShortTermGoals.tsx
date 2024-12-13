import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Target, CheckCircle2, Clock, Circle } from 'lucide-react';
import { AcademicGoal, ExtracurricularGoal } from './types';

interface ShortTermGoalsProps {
  academicGoals: AcademicGoal[];
  extracurricularGoals: ExtracurricularGoal[];
}

const GoalProgress = ({ status }: { status: string }) => {
  switch (status) {
    case 'completed':
      return <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />;
    case 'in_progress':
      return <Clock className="w-4 h-4 text-blue-500 mr-2" />;
    default:
      return <Circle className="w-4 h-4 text-gray-300 mr-2" />;
  }
};

const GoalCard = ({ title, deadline, target, progress, actionItems }: {
  title: string;
  deadline: string;
  target: string;
  progress: number;
  actionItems: { task: string; status: string; }[];
}) => (
  <div className="bg-white rounded-lg shadow p-4 border border-gray-100">
    <div className="flex justify-between items-start mb-3">
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-600">Target: {target}</p>
      </div>
      <span className="text-sm text-gray-500">{deadline}</span>
    </div>
    <Progress value={progress} className="h-2 mb-3" />
    <div className="space-y-2">
      {actionItems.map((item, idx) => (
        <div key={idx} className="flex items-center">
          <GoalProgress status={item.status} />
          <span className="text-sm">{item.task}</span>
        </div>
      ))}
    </div>
  </div>
);

export const ShortTermGoals: React.FC<ShortTermGoalsProps> = ({
  academicGoals,
  extracurricularGoals
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Target className="w-5 h-5 mr-2" />
          Short-term Goals 近期目标
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Academic Goals 学术目标</h3>
            {academicGoals.map((goal, idx) => (
              <GoalCard
                key={idx}
                title={goal.title}
                deadline={goal.deadline}
                target={goal.targetScore || goal.targetLevel}
                progress={goal.currentProgress}
                actionItems={goal.actionItems}
              />
            ))}
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Extracurricular Goals 课外目标</h3>
            {extracurricularGoals.map((goal, idx) => (
              <GoalCard
                key={idx}
                title={goal.title}
                deadline={goal.deadline}
                target={goal.target}
                progress={goal.currentProgress}
                actionItems={goal.actionItems}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};