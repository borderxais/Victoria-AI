import { Trophy, Users } from 'lucide-react';
import type { StudentData } from './types';

export const mockFamilyData: { students: Record<string, StudentData> } = {
  students: {
    sarah: {
      // Keep Sarah's existing data
      name: "Sarah Chen 陈思悦",
      grade: "8th Grade 八年级",
      age: 14,
      interests: ["Mathematics 数学", "Debate 辩论", "Piano 钢琴"],
      academicProgress: {
        currentGPA: "4.0",
        standardizedTests: [
          {
            name: "PSAT 8/9",
            score: "1350/1440",
            date: "2023-12",
            percentile: "99th"
          }
        ],
        currentCourses: [
          {
            name: "Advanced Mathematics 高等数学",
            grade: "A+",
            highlights: ["Top of class 班级第一", "Math Competition Team Leader 数学竞赛队长"]
          },
          {
            name: "Honors Physics 荣誉物理",
            grade: "A",
            highlights: ["Science Fair Winner 科学展获奖者"]
          },
          {
            name: "Advanced English 高级英语",
            grade: "A+",
            highlights: ["Debate Team Captain 辩论队队长"]
          }
        ]
      },
      extracurricularProgress: {
        majorAchievements: [
          {
            category: "Academic Competitions 学术竞赛",
            icon: Trophy,
            achievements: [
              {
                name: "Math Olympiad 数学奥林匹克",
                level: "State Level 州级",
                award: "Gold Medal 金牌",
                date: "2023-11",
                details: [
                  "Top scorer in state competition 州比赛最高分",
                  "Selected for national training camp 入选国家集训营",
                  "Perfect score in geometry section 几何部分满分"
                ]
              },
              {
                name: "Science Fair 科学展览",
                level: "Regional 地区级",
                award: "First Place 一等奖",
                date: "2023-09",
                details: [
                  "Research on AI applications in mathematics AI在数学中的应用研究",
                  "Innovative algorithm development 创新算法开发",
                  "Practical applications in education 教育领域实际应用"
                ]
              }
            ]
          },
          {
            category: "Leadership 领导力",
            icon: Users,
            achievements: [
              {
                name: "Student Council 学生会",
                position: "Vice President 副主席",
                period: "2023-2024",
                impact: "Led school-wide initiatives 领导全校活动",
                details: [
                  "Organized STEM education program 组织STEM教育项目",
                  "Led 20+ student volunteers 带领20多名学生志愿者",
                  "Increased student participation by 50% 学生参与度提升50%"
                ]
              }
            ]
          }
        ]
      },
      dreamSchools: [
        {
          name: "MIT 麻省理工",
          currentFit: 85,
          requirements: {
            academic: 90,
            extracurricular: 80,
            specialTalents: 85
          }
        },
        {
          name: "Stanford 斯坦福",
          currentFit: 82,
          requirements: {
            academic: 85,
            extracurricular: 78,
            specialTalents: 83
          }
        }
      ],
      roadmap: {
        shortTerm: {
          academicGoals: [
            {
              title: "PSAT 10 Preparation PSAT 10备考",
              deadline: "2024-03",
              targetScore: "1480+",
              currentProgress: 75,
              actionItems: [
                { task: "Complete practice tests 完成模拟测试", status: "in_progress" },
                { task: "Focus on advanced math 专注高等数学", status: "in_progress" },
                { task: "Reading comprehension drills 阅读理解训练", status: "pending" }
              ]
            }
          ],
          extracurricularGoals: [
            {
              title: "Science Research Project 科研项目",
              deadline: "2024-06",
              target: "Complete initial research phase 完成初步研究阶段",
              currentProgress: 40,
              actionItems: [
                { task: "Literature review 文献综述", status: "in_progress" },
                { task: "Data collection 数据收集", status: "pending" },
                { task: "Experiment design 实验设计", status: "pending" }
              ]
            }
          ]
        },
        longTerm: {
          academicMilestones: [
            {
              year: "2024-2025 (9th Grade 九年级)",
              goals: [
                {
                  title: "Advanced Placement Courses AP课程",
                  targets: [
                    "AP Calculus BC",
                    "AP Physics 1",
                    "AP Computer Science A"
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    michael: {
      // Michael's data as previously defined, but with proper icon imports
      name: "Michael Zhang 张明宇",
      grade: "12th Grade 十二年级",
      age: 17,
      interests: ["Artificial Intelligence 人工智能", "Molecular Biology 分子生物学", "Social Entrepreneurship 社会创业"],
      academicProgress: {
        currentGPA: "4.0",
        standardizedTests: [
          {
            name: "SAT",
            score: "1580/1600",
            date: "2023-10",
            percentile: "99th+"
          },
          {
            name: "SAT Subject Math II",
            score: "800/800",
            date: "2023-11",
            percentile: "99th"
          },
          {
            name: "SAT Subject Biology",
            score: "800/800",
            date: "2023-11",
            percentile: "99th"
          }
        ],
        currentCourses: [
          {
            name: "AP Biology AP生物",
            grade: "A+",
            highlights: [
              "Independent Research Project 独立研究项目",
              "Published in Nature Scientific Reports 发表于自然科学报告",
              "Biology Olympiad Gold Medalist 生物奥赛金牌"
            ]
          },
          {
            name: "AP Computer Science A AP计算机科学",
            grade: "A+",
            highlights: [
              "Developed AI Healthcare App 开发医疗AI应用",
              "Won National Coding Competition 获得全国编程比赛冠军",
              "Google Science Fair Finalist 谷歌科学竞赛决赛入围"
            ]
          },
          {
            name: "AP Research AP研究",
            grade: "A+",
            highlights: [
              "Research on AI in Healthcare AI医疗研究",
              "Collaboration with Stanford Professor 与斯坦福教授合作",
              "Published Research Paper 发表研究论文"
            ]
          }
        ]
      },
      extracurricularProgress: {
        majorAchievements: [
          {
            category: "Research & Innovation 研究与创新",
            icon: Trophy,
            achievements: [
              {
                name: "AI Healthcare Research AI医疗研究",
                level: "International 国际级",
                award: "Published in Nature Scientific Reports",
                date: "2023-12",
                details: [
                  "Developed novel ML algorithm for disease prediction 开发疾病预测机器学习算法",
                  "Collaborated with Stanford Medical School 与斯坦福医学院合作",
                  "Research featured in Science News 研究被科学新闻报道"
                ]
              },
              {
                name: "Intel Science Talent Search 英特尔科学天才搜索",
                level: "National 全国级",
                award: "Finalist 决赛入围者",
                date: "2023-11",
                details: [
                  "Top 40 in the nation 全国前40名",
                  "Research on AI-driven drug discovery AI驱动药物研发",
                  "Patent pending for novel algorithm 算法专利申请中"
                ]
              }
            ]
          },
          {
            category: "Social Impact 社会影响",
            icon: Users,
            achievements: [
              {
                name: "AI for Good Foundation AI公益基金会",
                position: "Founder & CEO 创始人兼CEO",
                period: "2022-Present",
                impact: "Reached 10,000+ students 影响超过1万名学生",
                details: [
                  "Developed free AI education platform 开发免费AI教育平台",
                  "Raised $100,000 in grants 获得10万美元资助",
                  "Featured in Forbes 30 Under 30 入选福布斯30位30岁以下精英"
                ]
              }
            ]
          }
        ]
      },
      dreamSchools: [
        {
          name: "Harvard 哈佛",
          currentFit: 95,
          requirements: {
            academic: 98,
            extracurricular: 95,
            specialTalents: 92
          }
        },
        {
          name: "Stanford 斯坦福",
          currentFit: 96,
          requirements: {
            academic: 97,
            extracurricular: 96,
            specialTalents: 95
          }
        }
      ],
      roadmap: {
        shortTerm: {
          academicGoals: [
            {
              title: "Research Paper Publication 研究论文发表",
              deadline: "2024-01",
              target: "Nature Scientific Reports",
              currentProgress: 90,
              actionItems: [
                { task: "Final manuscript revision 最终稿修改", status: "in_progress" },
                { task: "Address reviewer comments 回应审稿意见", status: "completed" },
                { task: "Submit supplementary data 提交补充数据", status: "in_progress" }
              ]
            }
          ],
          extracurricularGoals: [
            {
              title: "AI for Good Expansion AI公益扩展",
              deadline: "2024-02",
              target: "Launch in 5 new countries 在5个新国家启动",
              currentProgress: 85,
              actionItems: [
                { task: "Partner outreach 合作伙伴拓展", status: "in_progress" },
                { task: "Platform localization 平台本地化", status: "completed" },
                { task: "Volunteer training 志愿者培训", status: "in_progress" }
              ]
            }
          ]
        },
        longTerm: {
          academicMilestones: [
            {
              year: "2024 (College Freshman 大学新生)",
              goals: [
                {
                  title: "Research Continuation 研究继续",
                  targets: [
                    "Join top AI/Healthcare lab 加入顶级AI/医疗实验室",
                    "Submit second paper 提交第二篇论文",
                    "Apply for research grants 申请研究资助"
                  ]
                }
              ]
            }
          ]
        }
      }
    }
  }
};