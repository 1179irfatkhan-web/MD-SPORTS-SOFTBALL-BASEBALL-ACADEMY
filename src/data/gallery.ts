export interface GalleryItem {
  id: string;
  title: string;
  category: 'Training Sessions' | 'Baseball' | 'Softball' | 'Teams & Players' | 'Championships' | 'Awards & Recognition';
  imageUrl: string;
  caption: string;
  tag?: string;
}

export const galleryCategories = [
  "All",
  "Training Sessions",
  "Baseball",
  "Softball",
  "Teams & Players",
  "Championships",
  "Awards & Recognition",
] as const;

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-gu-national-2022",
    title: "Gujarat University All India Nationals 2022",
    category: "Teams & Players",
    imageUrl: "/images/gujarat-university-national-2022.jpg",
    caption: "Representing Gujarat University at National Level: Sujal Thakor, Anas Mansuri, Hitesh Bansari with Coach Meet Dabhi.",
    tag: "National Representatives"
  },
  {
    id: "gal-u13-nationals-2026",
    title: "Under-13 Mini Sub Junior Softball National Championship 2026",
    category: "Championships",
    imageUrl: "/images/u13-softball-nationals-2026.jpg",
    caption: "Team Gujarat secured 5th Position in the National Championship organized by Softball Association of India. Coach: Meet Dabhi.",
    tag: "5th Position in India"
  },
  {
    id: "gal-sgfi-u19-2026",
    title: "SGFI U-19 Gujarat State Softball Champions 2026",
    category: "Championships",
    imageUrl: "/images/sgfi-u19-champions-2026.jpg",
    caption: "Team Ahmedabad Rural secured 1st Position and became Gujarat State Champions. Coach: Meet Dabhi.",
    tag: "1st Position Champions"
  },
  {
    id: "gal-coach",
    title: "Founder & Head Coach: Meet Dabhi",
    category: "Teams & Players",
    imageUrl: "/images/coach-meet-dabhi.jpg",
    caption: "Meet Dabhi, Founder & Head Coach of MD Sports Academy (M.P.Ed, NIC Athletics Patiala).",
    tag: "Head Coach"
  },
  {
    id: "gal-1",
    title: "Championship Trophy & Gold Medals",
    category: "Championships",
    imageUrl: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?auto=format&fit=crop&w=1200&q=80",
    caption: "Symbolizing multiple Gujarat State & University titles earned through relentless discipline.",
    tag: "State Champions"
  },
  {
    id: "gal-2",
    title: "Fastpitch Softball Pitching Focus",
    category: "Softball",
    imageUrl: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80",
    caption: "Windmill pitching drills emphasizing release point, spin, and velocity control.",
    tag: "Pitching Mechanics"
  },
  {
    id: "gal-3",
    title: "Batting Stance & Swing Mechanics",
    category: "Baseball",
    imageUrl: "https://images.unsplash.com/photo-1508802271842-80b19366a445?auto=format&fit=crop&w=1200&q=80",
    caption: "Precision hitting practice focusing on rotational core power and bat path execution.",
    tag: "Batting Drills"
  },
  {
    id: "gal-4",
    title: "Athletic Agility & Sprint Training",
    category: "Training Sessions",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    caption: "Physical fitness and conditioning sessions led under NIS & Physical Education principles.",
    tag: "Conditioning"
  },
  {
    id: "gal-5",
    title: "Leather Baseball Glove & Diamond Ball",
    category: "Baseball",
    imageUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80",
    caption: "Fielding glove fundamentals, soft hands, and swift transfer drills.",
    tag: "Fielding Gear"
  },
  {
    id: "gal-6",
    title: "Championship Celebration & Team Unity",
    category: "Teams & Players",
    imageUrl: "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1200&q=80",
    caption: "Fostering unshakeable camaraderie, respect, and competitive teamwork.",
    tag: "Team Spirit"
  },
  {
    id: "gal-7",
    title: "Softball Home Plate & Catching Gear",
    category: "Softball",
    imageUrl: "https://images.unsplash.com/photo-1569517282132-25d22f4573e6?auto=format&fit=crop&w=1200&q=80",
    caption: "Catcher command behind the plate, pitch blocking, and diamond communication.",
    tag: "Behind The Plate"
  },
  {
    id: "gal-8",
    title: "Trophy Showcase & Tournament Honors",
    category: "Awards & Recognition",
    imageUrl: "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&w=1200&q=80",
    caption: "Celebrating historic milestone trophies from Gujarat University and SGFI championships.",
    tag: "State Honours"
  },
  {
    id: "gal-9",
    title: "Speed Ladder & Footwork Coordination",
    category: "Training Sessions",
    imageUrl: "https://images.unsplash.com/photo-1434596922112-19c563067271?auto=format&fit=crop&w=1200&q=80",
    caption: "Specialized footwork drills improving lateral quickness and base-stealing bursts.",
    tag: "Speed Drills"
  },
  {
    id: "gal-10",
    title: "National Competition Preparation",
    category: "Awards & Recognition",
    imageUrl: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=80",
    caption: "Preparing athletes for Gujarat State and All India National championship arenas.",
    tag: "National Stage"
  },
  {
    id: "gal-11",
    title: "Baseball Diamond Game Strategy",
    category: "Baseball",
    imageUrl: "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?auto=format&fit=crop&w=1200&q=80",
    caption: "In-game simulation, defensive cut-offs, and double-play execution.",
    tag: "Game IQ"
  },
  {
    id: "gal-12",
    title: "Youth Athlete Mentorship & Guidance",
    category: "Teams & Players",
    imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1200&q=80",
    caption: "Building character, mental toughness, and athletic confidence under Coach Meet Dabhi.",
    tag: "Mentorship"
  }
];

