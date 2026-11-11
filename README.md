# MD Sports Baseball & Softball Academy — Official Website

> **Tagline:** *Developing Skills. Building Champions. Inspiring the Future.*  
> **Head Coach:** Meet Dabhi | **Established:** 2017  
> **Office Address:** 337/54, Pritampura Society, Part 2, Near Girdharnagar Post Office, Sahibaug, Ahmedabad – 380004, Gujarat, India  
> **Practice Ground Location:** [Google Maps Directions](https://maps.app.goo.gl/UQbv1rFmyf6s5EJ29?g_st=aw)  

---

## ⚾ About the Project

This is the official, modern, high-performance static website for **MD Sports Baseball & Softball Academy**, designed and developed to establish the academy as the premier Baseball and Softball coaching institution in Ahmedabad, Gujarat.

The website reflects the visual identity of the official lion crest logo: a powerful aesthetic combining Deep Black (`#08070B`), Dark Navy (`#11172B`), Sports Orange (`#F36B16`), and Flame Gold (`#FFB21A`).

---

## 🏆 Verified Academy Highlights & Source of Truth

All information, records, and milestones on this website strictly adhere to official academy records:

1. **Founding & Head Coach**:
   - Founded in 2017 by **Meet Dabhi**
   - Professional Baseball & Softball Coach & Physical Education Teacher
   - Academic & Coaching Qualifications:
     - **B.P.Ed** (Bachelor of Physical Education)
     - **M.P.Ed** (Master of Physical Education)
     - **NIC Athletics Coaching**, Patiala, Punjab
     - **B.Com** (Bachelor of Commerce)
     - **M.Com** (Master of Commerce)

2. **National-Level Player Milestone**:
   - **75 players** associated with the academy participated in National-level competitions between 2022 and 2026 across Sub-Junior, Junior, and Senior categories.

3. **SGFI State Championships (2024–2026)**:
   - **2026 Under-17 Baseball**: Gujarat State Champions *(Ahmedabad Rural team represented by students of Shree Swaminarayan Gurukul International School, Ahmedabad)*
   - **2026 Under-19 Baseball**: Gujarat State Champions *(Ahmedabad Rural team represented by students of Shree Swaminarayan Gurukul International School, Ahmedabad)*
   - **2026 Under-14 Baseball**: Gujarat State Third Place
   - **2026 Senior Softball**: Gujarat University Third Place
   - **2025 Under-14 Softball**: Gujarat State Champions (Consecutive)
   - **2025 Under-17 Softball**: Gujarat State Champions
   - **2025 Under-14 Baseball**: Gujarat State Runners-Up
   - **2024 Under-14 Softball**: Gujarat State Champions
   - **2024 Under-17 Softball**: Gujarat State Runners-Up *(Team's first year of formation)*

4. **University Achievements (2022–2023)**:
   - Coached C. U. Shah Institute of BCA College
   - **2022**: Gujarat University Softball Runners-Up (3 students earned National opportunities)
   - **2023**: Gujarat University Softball Champions (4 students earned National opportunities)

5. **National Coaching Benchmarks**:
   - **Under-14 Baseball Nationals, Delhi**: Gujarat reached the Quarter-Finals (Top 8 Finish in India)
   - **Sub-Junior Baseball Nationals, Bhubaneswar, Odisha**: Gujarat achieved a Top-Five Finish

---

## 🛠️ Architecture & Tech Stack

- **Framework**: React 18 + Vite + TypeScript
- **Styling**: Tailwind CSS + Custom Athletic Theme Tokens (`brand.black`, `brand.navy`, `brand.orange`, `brand.gold`)
- **Icons**: Lucide Icons
- **Static Generation**: Zero runtime database or backend required. Deployable to Netlify, Vercel, GitHub Pages, or any static web hosting.
- **Enquiry Handling**: Client-side interactive WhatsApp generator (+91 9727402731) and email direct links with child-protection privacy notice.

---

## 📁 Project Structure

```
├── public/
│   └── logo/
│       └── md-sports-logo.jpg     # Authentic MD Sports Academy Lion Crest
├── src/
│   ├── data/
│   │   ├── academyInfo.ts          # Core contact info, locations, phone, WhatsApp, maps
│   │   ├── achievements.ts         # SGFI & University achievements, 75 national players
│   │   ├── coach.ts                # Meet Dabhi bio, degrees, coaching pillars
│   │   ├── gallery.ts              # Filterable photo gallery items & captions
│   │   ├── journey.ts              # 2017–2026 detailed timeline milestones
│   │   ├── programs.ts             # 4 coaching programs (Baseball, Softball, Fitness, Comp)
│   │   └── updates.ts              # "Latest from the Academy" static bulletin
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Sticky navigation + responsive mobile drawer
│   │   │   └── Footer.tsx          # Complete branding, quick links, social & map
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx          # Section A: Hero with crest and CTAs
│   │   │   ├── HighlightsSection.tsx    # Section B: 4 key stat blocks
│   │   │   ├── AboutSection.tsx         # Section C & 6: Story, mission, vision, philosophy
│   │   │   ├── CoachSection.tsx         # Section E: Coach profile & credentials
│   │   │   ├── ProgramsSection.tsx      # Section D: 4 distinct coaching areas
│   │   │   ├── AchievementsSection.tsx  # Section F & 7: Categorized results & table
│   │   │   ├── JourneySection.tsx       # Section G: 2017-2026 timeline
│   │   │   ├── LatestUpdatesSection.tsx # Section 9: Latest from the Academy
│   │   │   ├── GallerySection.tsx       # Section H: Photo gallery with lightbox
│   │   │   └── ContactSection.tsx       # Section I & 8: Contact, enquiry form & map
│   │   └── ui/
│   │       ├── LightboxModal.tsx   # Interactive full-screen image viewer
│   │       ├── PrivacyModal.tsx    # Privacy and youth athlete safety policy
│   │       └── SectionHeading.tsx  # Reusable athletic section header with flame bar
│   ├── App.tsx                     # Main application layout & active scroll tracking
│   ├── index.css                   # Tailwind base & custom athletic animations
│   └── main.tsx                    # React mount
├── dist/                           # Production-ready static output
└── package.json
```

---

## 🚀 How to Run & Build

### Development Mode
```bash
npm run dev
```

### Production Build
```bash
npm run build
```
The optimized static build will be placed in the `dist/` directory, ready to deploy.

### Preview Production Build
```bash
npm run preview
```

---

## 📢 Updating Academy Content (No Backend Required)

To add or update tournament results, announcements, or contact numbers without touching code logic:
1. **Announcements & News**: Open `src/data/updates.ts` and add a new update object.
2. **State & University Achievements**: Open `src/data/achievements.ts` and insert the new tournament placement.
3. **Contact / Address / Social**: Open `src/data/academyInfo.ts`.
4. Run `npm run build` to re-generate the static site.

