export interface AcademyUpdate {
  id: string;
  date: string;
  category: 'Championship' | 'Milestone' | 'Coaching' | 'Announcement';
  title: string;
  summary: string;
  badge: string;
  highlightPoints?: string[];
  externalLink?: string;
  externalLinkLabel?: string;
}

export const academyUpdates: AcademyUpdate[] = [
  {
    id: "update-2022-gujarat-university-nationals",
    date: "2022",
    category: "Milestone",
    title: "🏆 Representing Gujarat University at All India University Nationals 🥎",
    summary: "In the 2022 National Championship, three students proudly represented Gujarat University at the National Level: Sujal Thakor, Anas Mansuri, and Hitesh Bansari under Coach Meet Dabhi.",
    badge: "National Level Selection",
    highlightPoints: [
      "Player 1: Sujal Thakor",
      "Player 2: Anas Mansuri",
      "Player 3: Hitesh Bansari",
      "Coach: Meet Dabhi (C. U. Shah Institute of BCA College)"
    ],
    externalLink: "https://www.instagram.com/m.d._sports_academy?mdxt=ZW5sMXRjN2c0cTI5",
    externalLinkLabel: "View on Instagram"
  },
  {
    id: "update-2026-u13-softball-nationals-5th",
    date: "2026",
    category: "Championship",
    title: "⚾ Under-13 Mini Sub Junior Softball National Championship – 2026",
    summary: "Team Gujarat secured 5th Position in the National Championship organized by the Softball Association of India under Coach Meet Dabhi.",
    badge: "5th Position • All India",
    highlightPoints: [
      "Tournament: Mini Sub-Junior National Softball Championship U-13 (Boys & Girls)",
      "Organized by: Softball Association of India",
      "Result: Team Gujarat secured 5th Position",
      "Coach: Meet Dabhi"
    ],
    externalLink: "https://www.instagram.com/m.d._sports_academy?mdxt=ZW5sMXRjN2c0cTI5",
    externalLinkLabel: "View on Instagram"
  },
  {
    id: "update-2026-u19-softball-state-champs",
    date: "2026",
    category: "Championship",
    title: "🏆 SGFI U-19 Gujarat State Softball Championship – 2026 🥎",
    summary: "🥇 Team Ahmedabad Rural – Gujarat State Champions! The SGFI Under-19 Softball Team of Ahmedabad Rural secured 1st Position and became Gujarat State Champions under Head Coach Meet Dabhi.",
    badge: "1st Position • State Champions",
    highlightPoints: [
      "Tournament: 70th SGFI Gujarat State Softball Championship (2025–26)",
      "Team: Ahmedabad Rural – 1st Position State Champions",
      "Head Coach: Meet Dabhi"
    ],
    externalLink: "https://www.instagram.com/m.d._sports_academy?mdxt=ZW5sMXRjN2c0cTI5",
    externalLinkLabel: "View Celebrations on Instagram"
  },
  {
    id: "update-2026-dual-baseball-crowns",
    date: "2026",
    category: "Championship",
    title: "Double State Title Triumph at 2026 Gujarat State Baseball Championships",
    summary: "Ahmedabad Rural teams represented by students of Shree Swaminarayan Gurukul International School, Ahmedabad under Head Coach Meet Dabhi clinched BOTH the Under-17 and Under-19 Gujarat State Baseball Championships.",
    badge: "Championship Gold",
    highlightPoints: [
      "Under-17 Baseball: Gujarat State Champions",
      "Under-19 Baseball: Gujarat State Champions",
      "Under-14 Baseball: Gujarat State 3rd Place"
    ],
    externalLink: "https://www.instagram.com/m.d._sports_academy?mdxt=ZW5sMXRjN2c0cTI5",
    externalLinkLabel: "View Celebrations on Instagram"
  },
  {
    id: "update-75-nationals-milestone",
    date: "2022 – 2026",
    category: "Milestone",
    title: "75 Athletes Associated with Academy Compete at National Level",
    summary: "According to academy records, a landmark total of 75 student-athletes have represented Gujarat across Sub-Junior, Junior, and Senior National Baseball and Softball competitions between 2022 and 2026.",
    badge: "Historic Milestone",
    highlightPoints: [
      "Sub-Junior, Junior & Senior categories covered",
      "Strong pipeline feeding Gujarat State representation",
      "Consistent training excellence in Ahmedabad"
    ]
  },
  {
    id: "update-national-coaching-top8",
    date: "National Tournaments",
    category: "Coaching",
    title: "National-Level Coaching Milestones in Delhi & Odisha",
    summary: "Head Coach Meet Dabhi led Gujarat State contingents to remarkable national finishes: Quarter-Finals (Top 8) at the Under-14 Baseball Nationals in Delhi, and a Top 5 finish at Sub-Junior Nationals in Bhubaneswar, Odisha.",
    badge: "National Benchmarks",
    highlightPoints: [
      "Top 8 in India (U-14 Baseball Nationals, Delhi)",
      "Top 5 in India (Sub-Junior Nationals, Bhubaneswar)",
      "Strategic game preparation tested against top state teams"
    ]
  },
  {
    id: "update-new-batch-admissions",
    date: "Season 2026",
    category: "Announcement",
    title: "Enrolment Open for Under-14, Under-17, Under-19 & Senior Categories",
    summary: "Admissions open for young student-athletes aiming for structured Baseball and Softball coaching, fitness conditioning, and tournament competitive preparation in Ahmedabad.",
    badge: "Now Enrolling",
    highlightPoints: [
      "Personalized technical skill assessments",
      "Age-specific developmental squads",
      "Direct consultation with Head Coach Meet Dabhi"
    ],
    externalLink: "https://wa.me/919727402731?text=Hello%20MD%20Sports%20Academy%2C%20I%20would%20like%20to%20enquire%20about%20the%20new%20coaching%20batch.",
    externalLinkLabel: "Enquire via WhatsApp"
  }
];

