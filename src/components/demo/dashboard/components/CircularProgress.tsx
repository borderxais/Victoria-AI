import React from 'react';

interface CircularProgressProps {
  progress: number;
  size: number;
  strokeWidth: number;
  className?: string;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({ 
  progress, 
  size, 
  strokeWidth, 
  className = '' 
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width={size} height={size} className={className}>
      <circle
        className="text-gray-200"
        stroke="currentColor"
        fill="none"
        strokeWidth={strokeWidth}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        className="transform -rotate-90 origin-center transition-all duration-300"
        stroke="currentColor"
        fill="none"
        strokeWidth={strokeWidth}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={offset}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
    </svg>
  );
};