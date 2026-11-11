export interface StateChampionshipItem {
  year: number;
  category: string;
  sport: 'Baseball' | 'Softball';
  result: 'Champions' | 'Runners-Up' | 'Third Place';
  resultFull: string;
  note?: string;
  team?: string;
  coach?: string;
  description?: string;
  image?: string;
  featured?: boolean;
}

export interface UniversityAchievement {
  year: number;
  title: string;
  description: string;
  badge?: string;
  institution?: string;
  players?: string[];
  image?: string;
}

export interface NationalCoachingAchievement {
  year?: number;
  tournament: string;
  location?: string;
  team: string;
  result: string;
  significance: string;
  organizer?: string;
  coach?: string;
  image?: string;
}

export const stateChampionships: StateChampionshipItem[] = [
  {
    year: 2026,
    category: "Under-19 Softball",
    sport: "Softball",
    result: "Champions",
    resultFull: "Gujarat State Champions (1st Position)",
    team: "Team Ahmedabad Rural",
    coach: "Meet Dabhi",
    description: "The SGFI Under-19 Softball Team of Ahmedabad Rural secured 1st Position and became Gujarat State Champions (2026).",
    note: "Team Ahmedabad Rural – Gujarat State Champions. Coach: Meet Dabhi.",
    image: "/images/sgfi-u19-champions-2026.jpg",
    featured: true,
  },
  {
    year: 2026,
    category: "Under-17 Baseball",
    sport: "Baseball",
    result: "Champions",
    resultFull: "Gujarat State Champions",
    note: "Ahmedabad Rural team represented by students of Shree Swaminarayan Gurukul International School, Ahmedabad.",
    featured: true,
  },
  {
    year: 2026,
    category: "Under-19 Baseball",
    sport: "Baseball",
    result: "Champions",
    resultFull: "Gujarat State Champions",
    note: "Ahmedabad Rural team represented by students of Shree Swaminarayan Gurukul International School, Ahmedabad.",
    featured: true,
  },
  {
    year: 2026,
    category: "Under-14 Baseball",
    sport: "Baseball",
    result: "Third Place",
    resultFull: "Gujarat State Third Place",
    featured: false,
  },
  {
    year: 2026,
    category: "Senior Softball",
    sport: "Softball",
    result: "Third Place",
    resultFull: "Gujarat University Senior Softball Third Place",
    featured: false,
  },
  {
    year: 2025,
    category: "Under-14 Softball",
    sport: "Softball",
    result: "Champions",
    resultFull: "Gujarat State Champions",
    featured: true,
  },
  {
    year: 2025,
    category: "Under-17 Softball",
    sport: "Softball",
    result: "Champions",
    resultFull: "Gujarat State Champions",
    featured: true,
  },
  {
    year: 2025,
    category: "Under-14 Baseball",
    sport: "Baseball",
    result: "Runners-Up",
    resultFull: "Gujarat State Runners-Up",
    featured: false,
  },
  {
    year: 2024,
    category: "Under-14 Softball",
    sport: "Softball",
    result: "Champions",
    resultFull: "Gujarat State Champions",
    featured: true,
  },
  {
    year: 2024,
    category: "Under-17 Softball",
    sport: "Softball",
    result: "Runners-Up",
    resultFull: "Gujarat State Runners-Up",
    note: "Team's first year of formation.",
    featured: false,
  },
];

export const universityEraAchievements: UniversityAchievement[] = [
  {
    year: 2017,
    title: "Inaugural All India University Selection",
    description: "One female player earned selection to represent Gujarat University in the prestigious All India University Softball competition.",
    badge: "Softball Selection"
  },
  {
    year: 2018,
    title: "Dual All India University Selections",
    description: "Two female players were selected to represent Gujarat University in All India University competitions.",
    badge: "Softball Selections"
  },
  {
    year: 2019,
    title: "Triple All India University Selections",
    description: "Two male players and one female player earned selections to represent Gujarat University in All India University competitions.",
    badge: "Baseball & Softball"
  },
];

export const universityAchievements: UniversityAchievement[] = [
  {
    year: 2022,
    title: "Representing Gujarat University at the National Level All India University Competition 🥎",
    description: "In the National Championship held in 2022, three of our students proudly represented Gujarat University and participated at the National Level: Sujal Thakor, Anas Mansuri, and Hitesh Bansari. Heartiest Congratulations to all three players for this remarkable achievement!",
    institution: "C. U. Shah Institute of BCA College (Coach: Meet Dabhi)",
    badge: "All India University Nationals",
    players: [
      "Sujal Thakor",
      "Anas Mansuri",
      "Hitesh Bansari"
    ],
    image: "/images/gujarat-university-national-2022.jpg"
  },
  {
    year: 2023,
    title: "Gujarat University Softball Champions",
    description: "Gujarat University Softball champions; four students earned opportunities to represent at the National level.",
    institution: "C. U. Shah Institute of BCA College (Coach: Meet Dabhi)",
    badge: "Champions Trophy"
  },
];

export const nationalCoachingExperience: NationalCoachingAchievement[] = [
  {
    year: 2026,
    tournament: "Under-13 Mini Sub Junior Softball National Championship – 2026",
    team: "Team Gujarat – U-13 National Championship",
    organizer: "Softball Association of India",
    result: "5th Position in India",
    significance: "The Under-13 Softball Team of Gujarat secured 5th Position in National Championship Organized by Softball Association of India (2026).",
    coach: "Meet Dabhi",
    image: "/images/u13-softball-nationals-2026.jpg",
  },
  {
    tournament: "Under-14 Baseball Nationals",
    location: "Delhi",
    team: "Gujarat State U-14 Team",
    result: "Quarter-Finals (Top 8 Finish)",
    significance: "Gujarat reached the Quarter-Finals, finishing among the top eight teams in India."
  },
  {
    tournament: "Sub-Junior Baseball Nationals",
    location: "Bhubaneswar, Odisha",
    team: "Gujarat State Sub-Junior Team",
    result: "Top-Five Finish",
    significance: "Gujarat achieved a historic top-five finish in national competition."
  }
];

export const nationalPlayerDevelopment = {
  totalCount: 75,
  period: "2022–2026",
  statement: "According to academy records, between 2022 and 2026, 75 players associated with MD Sports Academy participated in National-level Baseball and Softball competitions through the respective associations.",
  categories: ["Sub-Junior Category", "Junior Category", "Senior Category"],
};

