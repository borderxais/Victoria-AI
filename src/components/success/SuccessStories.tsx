import React from 'react';
import { SuccessCard } from './components/SuccessCard';
import { successStories } from './data/successStories';

export const SuccessStories = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Student Success Stories
            <span className="block text-2xl text-gray-600 mt-2">
              学生成功案例
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((story, idx) => (
            <SuccessCard key={idx} {...story} />
          ))}
        </div>
      </div>
    </div>
  );
};