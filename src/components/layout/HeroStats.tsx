import React from 'react';

const stats = [
  { number: "98%", label: "Success Rate 成功率" },
  { number: "5000+", label: "Students 学生" },
  { number: "50+", label: "Top Universities 顶尖学府" }
];

export const HeroStats = () => (
  <div className="flex gap-8 text-gray-600">
    {stats.map(({ number, label }) => (
      <div key={number}>
        <div className="text-3xl font-bold text-blue-600">{number}</div>
        <div className="text-sm">{label}</div>
      </div>
    ))}
  </div>
);