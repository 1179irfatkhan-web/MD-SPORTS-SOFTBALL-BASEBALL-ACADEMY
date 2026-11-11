export interface AcademyInfo {
  name: string;
  fullName: string;
  tagline: string;
  established: number;
  founderAndHeadCoach: string;
  officeAddress: {
    line1: string;
    line2: string;
    area: string;
    landmark: string;
    city: string;
    pincode: string;
    state: string;
    country: string;
    fullAddress: string;
    mapUrl: string;
  };
  practiceGround: {
    title: string;
    description: string;
    city: string;
    state: string;
    mapUrl: string;
  };
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
    officeMaps: string;
    practiceGroundMaps: string;
  };
  specialization: string;
  categories: string[];
  nationalPlayersCount: number;
  nationalPlayersNote: string;
  heroHeadline: string;
  heroSupportingText: string;
}

const officeAddressText = "337/54, Pritampura Society, Part 2, Near Girdharnagar Post Office, Sahibaug, Ahmedabad – 380004, Gujarat, India.";
const officeMapUrl = "https://www.google.com/maps/search/?api=1&query=337%2F54%2C+Pritampura+Society%2C+Part+2%2C+Near+Girdharnagar+Post+Office%2C+Sahibaug%2C+Ahmedabad+-+380004%2C+Gujarat%2C+India";
const practiceGroundMapUrl = "https://maps.app.goo.gl/UQbv1rFmyf6s5EJ29?g_st=aw";

export const academyInfo: AcademyInfo = {
  name: "MD Sports Academy",
  fullName: "MD Sports Baseball & Softball Academy",
  tagline: "Developing Skills. Building Champions. Inspiring the Future.",
  established: 2017,
  founderAndHeadCoach: "Meet Dabhi",
  officeAddress: {
    line1: "337/54, Pritampura Society, Part 2",
    line2: "Near Girdharnagar Post Office",
    area: "Sahibaug",
    landmark: "Near Girdharnagar Post Office",
    city: "Ahmedabad",
    pincode: "380004",
    state: "Gujarat",
    country: "India",
    fullAddress: officeAddressText,
    mapUrl: officeMapUrl,
  },
  practiceGround: {
    title: "Official Practice Ground",
    description: "Dedicated Baseball & Softball training ground equipped for batting drills, pitching practice, fielding mechanics, and competitive match simulations.",
    city: "Ahmedabad",
    state: "Gujarat",
    mapUrl: practiceGroundMapUrl,
  },
  location: {
    area: "Sahibaug",
    landmark: "Near Girdharnagar Post Office",
    city: "Ahmedabad",
    state: "Gujarat",
    country: "India",
    fullAddress: officeAddressText,
  },
  contact: {
    phone: "9727402731",
    displayPhone: "+91 97274 02731",
    whatsapp: "9727402731",
    whatsappUrl: "https://wa.me/919727402731?text=Hello%20MD%20Sports%20Academy%2C%20I%20am%20interested%20in%20Baseball%20%26%20Softball%20coaching%20enquiry.",
    email: "meetdabhi511@gmail.com",
    instagram: "https://www.instagram.com/m.d._sports_academy?mdxt=ZW5sMXRjN2c0cTI5",
    googleMaps: officeMapUrl,
    officeMaps: officeMapUrl,
    practiceGroundMaps: practiceGroundMapUrl,
  },
  specialization: "Professional Baseball and Softball Coaching",
  categories: ["Under-14", "Under-17", "Under-19", "Senior Players"],
  nationalPlayersCount: 75,
  nationalPlayersNote: "75 players associated with the academy participated in National-level competitions between 2022 and 2026, according to academy records.",
  heroHeadline: "BUILDING CHAMPIONS. ONE GAME AT A TIME.",
  heroSupportingText: "Develop your skills, strengthen your mindset, and prepare for the next level with MD Sports Baseball & Softball Academy.",
};
