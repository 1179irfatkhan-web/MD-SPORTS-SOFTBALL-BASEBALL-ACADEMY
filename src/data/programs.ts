export interface CoachingProgram {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  skills: string[];
  ageGroups: string[];
  keyHighlights: string[];
  iconName: 'baseball' | 'softball' | 'fitness' | 'competition';
}

export const coachingPrograms: CoachingProgram[] = [
  {
    id: "baseball-coaching",
    title: "Baseball Coaching",
    subtitle: "Technical & Strategic Diamond Mastery",
    badge: "Core Sport",
    description: "Comprehensive coaching designed for all skill levels from beginner fundamentals to elite competitive baseball. Players master mechanics, tactical plate discipline, base running, and positional defensive IQ.",
    skills: [
      "Batting mechanics & swing plane",
      "Overhand pitching & ball velocity",
      "Infield/Outfield fielding & arm strength",
      "Catching mechanics & framing",
      "Base running & strategic situational play"
    ],
    ageGroups: ["Under-14", "Under-17", "Under-19", "Senior"],
    keyHighlights: [
      "Form correction with technical breakdown",
      "Throwing velocity and mechanics conditioning",
      "Game-situation defensive rotations"
    ],
    iconName: "baseball",
  },
  {
    id: "softball-coaching",
    title: "Softball Coaching",
    subtitle: "Championship-Caliber Fastpitch Training",
    badge: "Championship Proven",
    description: "Built upon the academy's proven track record of multiple Gujarat State and University Championships. Focused on rapid-reaction softball fundamentals, windmill pitching, and quick-release fielding.",
    skills: [
      "Windmill pitching & spin control",
      "Fastpitch batting & bunting execution",
      "Catcher pop-time & ball blocking",
      "Rapid infield transition & footwork",
      "Aggressive base running tactics"
    ],
    ageGroups: ["Under-14", "Under-17", "Under-19", "Senior"],
    keyHighlights: [
      "Specialized training for male & female athletes",
      "Proven Gujarat University & SGFI state winning methodology",
      "Reaction-speed and defensive quick-release drills"
    ],
    iconName: "softball",
  },
  {
    id: "fitness-conditioning",
    title: "Fitness & Conditioning",
    subtitle: "Athletic Power, Agility & Stamina",
    badge: "Physical Foundation",
    description: "Curated by Physical Education post-graduate coach Meet Dabhi, this program targets sports-specific athleticism, rotational torso power, speed explosiveness, and injury prevention tailored for diamond athletes.",
    skills: [
      "Explosive sprint speed & deceleration",
      "Rotational core strength for batting exit velocity",
      "Rotator cuff and throwing arm care",
      "Agility ladder & lateral quickness",
      "Cardiovascular stamina & match endurance"
    ],
    ageGroups: ["Under-14", "Under-17", "Under-19", "Senior"],
    keyHighlights: [
      "Athletic movement screening",
      "Targeted arm health and shoulder preservation",
      "Periodized training for tournament peaks"
    ],
    iconName: "fitness",
  },
  {
    id: "competitive-preparation",
    title: "Competitive Preparation",
    subtitle: "Tournament Mindset & Elite Pathways",
    badge: "Pathway To Nationals",
    description: "Prepares athletes mentally and tactically for high-pressure competition in SGFI State Championships, All India University tournaments, and National trials.",
    skills: [
      "Live match simulations & pressure scenarios",
      "Mental resilience & clutch focus",
      "Scorebook analysis & umpire awareness",
      "Team leadership, sportsmanship & communication",
      "State & National trial readiness"
    ],
    ageGroups: ["Under-14", "Under-17", "Under-19", "Senior"],
    keyHighlights: [
      "Direct pathway guidance to University and State trials",
      "Tactical game plans against diverse styles",
      "Leadership and psychological composure under pressure"
    ],
    iconName: "competition",
  },
];

