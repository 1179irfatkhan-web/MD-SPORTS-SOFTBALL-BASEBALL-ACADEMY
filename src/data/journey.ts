export interface JourneyMilestone {
  year: number;
  phase: string;
  title: string;
  description: string;
  highlights: string[];
  tag: string;
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    year: 2017,
    phase: "The Foundation",
    title: "The Beginning of a Dream",
    description: "Founded by Meet Dabhi in Ahmedabad with a bold vision: to establish structured Baseball & Softball coaching in Gujarat and create authentic competitive pathways for aspiring student-athletes.",
    highlights: [
      "Inaugural training batches initiated in Ahmedabad",
      "One female player selected to represent Gujarat University in the All India University Softball competition"
    ],
    tag: "Academy Founded"
  },
  {
    year: 2018,
    phase: "Growth & Recognition",
    title: "Expanding University Talent Pool",
    description: "Technical coaching methodology begins yielding consistent university-level results through rigorous fielding and batting drills.",
    highlights: [
      "Two female players selected to represent Gujarat University in All India University competitions",
      "Structured player fitness and conditioning protocols introduced"
    ],
    tag: "University Pathway"
  },
  {
    year: 2019,
    phase: "Dual-Discipline Expansion",
    title: "Male & Female State Representation",
    description: "The academy broadens its competitive scope across both Baseball and Softball, earning multiple university roster spots.",
    highlights: [
      "Two male players and one female player selected for All India University competitions",
      "Youth developmental squads established for grassroots talent"
    ],
    tag: "Multi-Discipline"
  },
  {
    year: 2022,
    phase: "Collegiate Breakthrough",
    title: "Gujarat University Runners-Up & National Surge",
    description: "Meet Dabhi leads C. U. Shah Institute of BCA College as Assistant Professor and Coach, demonstrating championship-level tactical acumen.",
    highlights: [
      "Gujarat University Softball Runners-Up title",
      "Three student-athletes selected for All India University Nationals: Sujal Thakor, Anas Mansuri, and Hitesh Bansari",
      "Official launch of expanded junior development programs"
    ],
    tag: "University Finalists"
  },
  {
    year: 2023,
    phase: "University Champions",
    title: "Gujarat University Softball Champions",
    description: "A crowning milestone as the coached university squad lifts the championship trophy with dominant tactical play.",
    highlights: [
      "Gujarat University Softball Champions Trophy",
      "Four players earn direct National-level representation opportunities",
      "Preparations commence for entry into School Games Federation of India (SGFI) circuits"
    ],
    tag: "State Champions"
  },
  {
    year: 2024,
    phase: "SGFI State Dominance",
    title: "State Title & First-Year Finalists",
    description: "The academy translates collegiate success into youth dominance across Gujarat's most competitive school sports championships.",
    highlights: [
      "Under-14 Softball: Gujarat State Champions",
      "Under-17 Softball: Gujarat State Runners-Up (Achieved in the team's very first year of formation)",
      "Youth athletes gain selection to Gujarat state camps"
    ],
    tag: "SGFI Champions"
  },
  {
    year: 2025,
    phase: "State Championship Sweep",
    title: "Dual Softball Crowns & Baseball Finals",
    description: "Unprecedented dominance across age categories with multiple state podium placements in both disciplines.",
    highlights: [
      "Under-14 Softball: Gujarat State Champions (Consecutive title)",
      "Under-17 Softball: Gujarat State Champions",
      "Under-14 Baseball: Gujarat State Runners-Up"
    ],
    tag: "Multi-Title Sweep"
  },
  {
    year: 2026,
    phase: "Historic Baseball Milestone",
    title: "Dual State Gold & 75 National Athletes",
    description: "A monumental year highlighted by Ahmedabad Rural teams (represented by students of Shree Swaminarayan Gurukul International School, Ahmedabad) capturing state baseball crowns, and crossing the landmark of 75 national players.",
    highlights: [
      "Under-13 Softball: Team Gujarat secured 5th Position in National Championship (Softball Association of India, Coach: Meet Dabhi)",
      "Under-19 Softball: Gujarat State Champions (Team Ahmedabad Rural, Coach: Meet Dabhi)",
      "Under-17 Baseball: Gujarat State Champions",
      "Under-19 Baseball: Gujarat State Champions",
      "Under-14 Baseball: Gujarat State Third Place",
      "Gujarat University Senior Softball: Third Place finish",
      "75 players associated with the academy competed at National level (2022–2026)"
    ],
    tag: "75+ National Players"
  }
];

