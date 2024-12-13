export const mockFamilyData = {
  students: {
    sarah: {
      // Sarah's existing data remains unchanged
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
            achievements: [
              {
                name: "Math Olympiad 数学奥林匹克",
                level: "State Level 州级",
                award: "Gold Medal 金牌",
                date: "2023-11"
              },
              {
                name: "Science Fair 科学展览",
                level: "Regional 地区级",
                award: "First Place 一等奖",
                date: "2023-09"
              }
            ]
          },
          {
            category: "Leadership 领导力",
            achievements: [
              {
                name: "Student Council 学生会",
                position: "Vice President 副主席",
                period: "2023-2024",
                impact: "Led school-wide initiatives 领导全校活动"
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
      name: "Michael Zhang 张明宇",
      grade: "10th Grade 十年级",
      age: 16,
      interests: ["Computer Science 计算机科学", "Robotics 机器人", "Tennis 网球"],
      academicProgress: {
        currentGPA: "4.2",
        standardizedTests: [
          {
            name: "PSAT/NMSQT",
            score: "1480/1520",
            date: "2023-10",
            percentile: "99th"
          },
          {
            name: "SAT Subject Math II",
            score: "800/800",
            date: "2023-12",
            percentile: "99th"
          }
        ],
        currentCourses: [
          {
            name: "AP Computer Science A AP计算机科学",
            grade: "A+",
            highlights: ["Perfect scores on all projects 所有项目满分", "Created ML Club 创建机器学习俱乐部"]
          },
          {
            name: "AP Calculus BC AP微积分BC",
            grade: "A+",
            highlights: ["Class Representative 班级代表", "Math Team Leader 数学队长"]
          },
          {
            name: "AP Physics C AP物理C",
            grade: "A",
            highlights: ["Robotics Project Lead 机器人项目负责人"]
          }
        ]
      },
      extracurricularProgress: {
        majorAchievements: [
          {
            category: "Technology 科技",
            achievements: [
              {
                name: "USA Computing Olympiad 美国计算机奥赛",
                level: "Gold Division 金级",
                award: "Finalist 决赛入围",
                date: "2023-12"
              },
              {
                name: "Robotics Competition 机器人竞赛",
                level: "National 全国级",
                award: "Second Place 亚军",
                date: "2023-11"
              }
            ]
          },
          {
            category: "Leadership 领导力",
            achievements: [
              {
                name: "Computer Science Club 计算机科学俱乐部",
                position: "President 主席",
                period: "2023-2024",
                impact: "Doubled club membership 使俱乐部成员翻倍"
              }
            ]
          }
        ]
      },
      dreamSchools: [
        {
          name: "Carnegie Mellon 卡内基梅隆",
          currentFit: 88,
          requirements: {
            academic: 92,
            extracurricular: 85,
            specialTalents: 87
          }
        },
        {
          name: "UC Berkeley 伯克利",
          currentFit: 86,
          requirements: {
            academic: 88,
            extracurricular: 84,
            specialTalents: 86
          }
        }
      ],
      roadmap: {
        shortTerm: {
          academicGoals: [
            {
              title: "Research Paper Publication 研究论文发表",
              deadline: "2024-01",
              targetScore: "Nature Scientific Reports",
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