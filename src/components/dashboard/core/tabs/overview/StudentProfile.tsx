import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { StudentData } from '../../types';

interface StudentProfileProps {
  student: StudentData;
}

export const StudentProfile: React.FC<StudentProfileProps> = ({ student }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Basic Information 基本信息</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">{student.name}</h3>
            <p className="text-gray-600">{student.grade} • Age {student.age}岁</p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Interests 兴趣爱好</h4>
            <div className="flex flex-wrap gap-2">
              {student.interests.map((interest, idx) => (
                <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {interest}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-2">Current Stats 当前状态</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-sm text-gray-600">GPA</div>
                <div className="text-xl font-semibold">{student.academicProgress.currentGPA}</div>
              </div>
              {student.academicProgress.standardizedTests.map((test, idx) => (
                <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-sm text-gray-600">{test.name}</div>
                  <div className="text-xl font-semibold">{test.score}</div>
                  <div className="text-sm text-gray-500">{test.percentile}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};