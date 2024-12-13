import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StudentHeader } from './components/StudentHeader';
import { OverviewTab } from './tabs/OverviewTab';
import { AchievementsTab } from './tabs/AchievementsTab';
import { DreamSchoolsTab } from './tabs/DreamSchoolsTab';
import { RoadmapTab } from './tabs/RoadmapTab';

export const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-6">
      <StudentHeader />
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview 概览</TabsTrigger>
          <TabsTrigger value="achievements">Achievements 成就</TabsTrigger>
          <TabsTrigger value="dreamschools">Dream Schools 理想学校</TabsTrigger>
          <TabsTrigger value="roadmap">Roadmap 规划</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <OverviewTab />
        </TabsContent>

        <TabsContent value="achievements">
          <AchievementsTab />
        </TabsContent>

        <TabsContent value="dreamschools">
          <DreamSchoolsTab />
        </TabsContent>

        <TabsContent value="roadmap">
          <RoadmapTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};