import { Trophy, Rocket, Award } from 'lucide-react';
import { SuccessStory } from '../types';

export const successStories: SuccessStory[] = [
  {
    name: "Sarah C.",
    nameCn: "陈思悦",
    school: "MIT",
    year: "2023",
    icon: Trophy,
    achievements: [
      "International Math Olympiad Silver Medal",
      "Published AI Research Paper",
      "Founded Educational Technology Startup"
    ],
    quote: "Victoria AI helped me transform my potential into exceptional achievements."
  },
  {
    name: "Michael L.",
    nameCn: "刘明",
    school: "Stanford",
    year: "2023",
    icon: Rocket,
    achievements: [
      "USA Computing Olympiad Finalist",
      "Two Technology Patents",
      "Google Science Fair Winner"
    ],
    quote: "The strategic guidance made all the difference in my application."
  },
  {
    name: "Emma W.",
    nameCn: "王悦",
    school: "Harvard",
    year: "2023",
    icon: Award,
    achievements: [
      "Published Research in Nature",
      "National Merit Scholar",
      "Started Global Education Initiative"
    ],
    quote: "Victoria AI's personalized approach helped me stand out."
  }
];