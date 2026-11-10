export interface AcademyInfo {
  name: string;
  fullName: string;
  tagline: string;
  established: number;
  founderAndHeadCoach: string;
  location: {
    city: string;
    state: string;
    country: string;
    area: string;
    landmark: string;
    fullAddress: string;
  };
  contact: {
    phone: string;
    displayPhone: string;
    whatsapp: string;
    whatsappUrl: string;
    email: string;
    instagram: string;
    googleMaps: string;
  };
  specialization: string;
  categories: string[];
  nationalPlayersCount: number;
  nationalPlayersNote: string;
  heroHeadline: string;
  heroSupportingText: string;
}

export const academyInfo: AcademyInfo = {
  name: "MD Sports Academy",
  fullName: "MD Sports Baseball & Softball Academy",
  tagline: "Developing Skills. Building Champions. Inspiring the Future.",
  established: 2017,
  founderAndHeadCoach: "Meet Dabhi",
  location: {
    area: "Nikol",
    landmark: "Gurukul Circle",
    city: "Ahmedabad",
    state: "Gujarat",
    country: "India",
    fullAddress: "Gurukul Circle, Nikol, Ahmedabad, Gujarat, India",
  },
  contact: {
    phone: "9727402731",
    displayPhone: "+91 97274 02731",
    whatsapp: "9727402731",
    whatsappUrl: "https://wa.me/919727402731?text=Hello%20MD%20Sports%20Academy%2C%20I%20am%20interested%20in%20Baseball%20%26%20Softball%20coaching%20enquiry.",
    email: "meetdabhi511@gmail.com",
    instagram: "https://www.instagram.com/m.d._sports_academy?mdxt=ZW5sMXRjN2c0cTI5",
    googleMaps: "https://maps.app.goo.gl/WTTACtFRhfez2GHM9",
  },
  specialization: "Professional Baseball and Softball Coaching",
  categories: ["Under-14", "Under-17", "Under-19", "Senior Players"],
  nationalPlayersCount: 75,
  nationalPlayersNote: "75 players associated with the academy participated in National-level competitions between 2022 and 2026, according to academy records.",
  heroHeadline: "BUILDING CHAMPIONS. ONE GAME AT A TIME.",
  heroSupportingText: "Develop your skills, strengthen your mindset, and prepare for the next level with MD Sports Baseball & Softball Academy.",
};

