import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Target, Microscope, Heart, Calendar, CheckCircle } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import type { AcademicGoal, ExtracurricularGoal } from '../../types';

interface ShortTermGoalsProps {
  academicGoals: AcademicGoal[];
  extracurricularGoals: ExtracurricularGoal[];
}

export const ShortTermGoals: React.FC<ShortTermGoalsProps> = ({ 
  academicGoals, 
  extracurricularGoals 
}) => {
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
            <div className={`w-4 h-4 rounded-full mr-2 ${
              item.status === 'completed' 
                ? 'bg-green-500 flex items-center justify-center' 
                : item.status === 'in_progress'
                ? 'border-2 border-blue-500'
                : 'border-2 border-gray-300'
            }`}>
              {item.status === 'completed' && <CheckCircle className="w-3 h-3 text-white" />}
            </div>
            <span className="text-sm">{item.task}</span>
          </div>
        ))}
      </div>
    </div>
  );

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
                target={goal.targetScore || ""}
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