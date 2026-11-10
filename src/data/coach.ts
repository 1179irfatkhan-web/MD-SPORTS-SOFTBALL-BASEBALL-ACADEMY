export interface CoachProfile {
  name: string;
  role: string;
  titles: string[];
  image: string;
  bio: string;
  missionStatement: string;
  qualifications: {
    degree: string;
    field: string;
    institution?: string;
  }[];
  specializations: string[];
  coachingPillars: {
    title: string;
    description: string;
  }[];
}

export const coachData: CoachProfile = {
  name: "Meet Dabhi",
  role: "Founder & Head Coach",
  image: "/images/coach-meet-dabhi.jpg",
  titles: [
    "Founder & Head Coach",
    "Professional Baseball & Softball Coach",
    "Physical Education Teacher",
  ],
  bio: "Meet Dabhi is a Physical Education Teacher and Baseball & Softball Coach dedicated to developing young sporting talent and preparing athletes for competitive success. As Founder and Head Coach of MD Sports Baseball & Softball Academy, he focuses on technical excellence, physical fitness, discipline, teamwork, and mental strength. His coaching approach emphasizes individual skill development, structured training, match preparation, and competitive performance.",
  missionStatement: "My mission is to identify young talent, develop their skills, build their confidence, and provide them with the right opportunities to represent Gujarat and India at the highest levels of Baseball and Softball.",
  qualifications: [
    {
      degree: "B.P.Ed",
      field: "Bachelor of Physical Education",
    },
    {
      degree: "M.P.Ed",
      field: "Master of Physical Education",
    },
    {
      degree: "NIC Athletics Coaching",
      field: "National Institute of Coaching, Athletics",
      institution: "Patiala, Punjab",
    },
    {
      degree: "B.Com",
      field: "Bachelor of Commerce",
    },
    {
      degree: "M.Com",
      field: "Master of Commerce",
    },
  ],
  specializations: [
    "Baseball Coaching & Tactical Strategy",
    "Softball Coaching & Fastpitch Mechanics",
    "Physical Fitness & Athletic Conditioning",
    "Batting, Pitching, Catching & Fielding Skills",
    "Match Preparation & Tournament Mental Conditioning",
    "Youth & Elite Pathway (U-14, U-17, U-19 & Senior)",
  ],
  coachingPillars: [
    {
      title: "Technical Excellence",
      description: "Fundamental mechanics from proper grip, arm angles, plate discipline, to fielding footwork.",
    },
    {
      title: "Physical Conditioning",
      description: "Baseball/softball-specific endurance, explosive linear speed, core rotational power, and agility.",
    },
    {
      title: "Mental Discipline",
      description: "Pressure execution, situational IQ, emotional composure, and resilience during tight innings.",
    },
    {
      title: "Sportsmanship & Teamwork",
      description: "Building character, mutual respect, accountability, and leadership that translates beyond the diamond.",
    },
  ],
};

