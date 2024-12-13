import React from 'react';

export const StudentHeader = () => {
  const interests = ['AI', 'Biology', 'Social Impact'];

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Michael Zhang 张明宇</h1>
        <p className="text-gray-500">12th Grade 十二年级 • Age 17岁</p>
      </div>
      <div className="flex items-center gap-4">
        {interests.map((interest) => (
          <span key={interest} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            {interest}
          </span>
        ))}
      </div>
    </div>
  );
};