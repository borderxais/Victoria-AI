import React from 'react';
import { BasicInfo } from './components/BasicInfo';
import { CurrentCourses } from './components/CurrentCourses';
import { MajorAchievements } from './components/MajorAchievements';
import type { StudentProfileData } from './types';

interface StudentProfileProps {
  student: StudentProfileData;
}

export const StudentProfile: React.FC<StudentProfileProps> = ({ student }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <BasicInfo
        name={student.name}
        grade={student.grade}
        age={student.age}
        interests={student.interests}
        gpa={student.academicProgress.currentGPA}
        standardizedTests={student.academicProgress.standardizedTests}
      />
      <CurrentCourses courses={student.academicProgress.currentCourses} />
      <div className="lg:col-span-2">
        <MajorAchievements achievements={student.extracurricularProgress.majorAchievements} />
      </div>
    </div>
  );
};