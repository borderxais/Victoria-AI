import React, { useState } from 'react';
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OverviewTab } from './tabs/OverviewTab';
import { AchievementsTab } from './tabs/AchievementsTab';
import { DreamSchoolsTab } from './tabs/DreamSchoolsTab';
import { RoadmapTab } from './tabs/RoadmapTab';
import { mockFamilyData } from './data/mockData';

export const FamilyEducationDashboard = () => {
  const [selectedStudent, setSelectedStudent] = useState('sarah');
  const student = mockFamilyData.students[selectedStudent];

  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-6">
      {/* Header with Student Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">
                Family Education Coach
                <span className="block text-lg font-normal text-gray-600">
                  家庭教育管家
                </span>
              </h1>
            </div>
            <Select value={selectedStudent} onValueChange={setSelectedStudent}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select student 选择学生" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(mockFamilyData.students).map(([id, s]) => (
                  <SelectItem key={id} value={id}>{s.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardTitle>
        </CardHeader>
      </Card>

      {/* Main Content */}
      <Tabs defaultValue="overview">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview 概览</TabsTrigger>
          <TabsTrigger value="achievements">Achievements 成就</TabsTrigger>
          <TabsTrigger value="dreamschools">Dream Schools 理想学校</TabsTrigger>
          <TabsTrigger value="roadmap">Roadmap 规划</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <OverviewTab student={student} />
        </TabsContent>

        <TabsContent value="achievements">
          <AchievementsTab student={student} />
        </TabsContent>

        <TabsContent value="dreamschools">
          <DreamSchoolsTab student={student} />
        </TabsContent>

        <TabsContent value="roadmap">
          <RoadmapTab student={student} />
        </TabsContent>
      </Tabs>
    </div>
  );
};