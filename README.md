# 🟢 VNR DESIGN-A-THON 2026 // WEB_MAINFRAME

> **"Decrypting Design Limits // 24-Hour National Level Hackathon"**

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## 📡 SYSTEM_OVERVIEW

The official landing page and registration portal for the 4th Edition of the **VNR DESIGN-A-THON**, hosted by the Department of CSE & CSBS at VNRVJIET, Hyderabad.

This project features a high-tech, cyberpunk-inspired terminal UI designed to immerse participants in a hacker-style environment before they even arrive at the 24-hour building sprint.

---

## 🚀 CORE_FEATURES

- **Terminal Boot Sequence:** Custom animated typing effect simulating a mainframe boot upon initial load.
- **Matrix Digital Rain:** Dynamic, customized background canvas running highly optimized matrix code-rain via Framer Motion.
- **Responsive Command Directory:** Interactive, animated grid layouts for team, faculty, and leadership contacts.
- **Advisory Modals:** Custom-built interception modals for Unstop registration with interactive blur-backgrounds and secure click-away logic.
- **Cross-Browser Safe Glow Effects:** Bulletproof CSS architecture utilizing `blur-[40px]` background orbs to ensure 100% rendering fidelity across Safari, Chrome, and Brave.
- **Smooth Navigation Navigation:** A fixed, animated sticky navbar with glowing laser-underlines and custom programmatic smooth-scrolling for mobile devices.

---

## ⚙️ INITIATE_LOCAL_ENVIRONMENT

To run the mainframe on your local machine, follow this protocol:

### 1. Clone the Repository

```bash
git clone https://github.com/Anurag-006/designathon-page.git
cd designathon-2026
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Boot the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📂 DIRECTORY_STRUCTURE

```text
├── app/
│   ├── data/              # eventData.ts (Text, links, and schedules)
│   ├── globals.css        # Core Tailwind directives & raw CSS
│   ├── layout.tsx         # Main HTML wrapper & font imports
│   └── page.tsx           # Primary rendering logic
├── components/
│   ├── HeroSection.tsx    # Matrix rain, countdown, registration
│   ├── AboutSection.tsx   # System archives & Dept Info
│   ├── Guidelines.tsx     # Operations protocol
│   ├── ContactSection.tsx # Command Directory (Coordinators)
│   └── Navbar/Footer.tsx  # Global navigation
└── public/                # Static assets (Logos, PDFs, Favicons)
```

---

## 📝 DATA_MODIFICATION_PROTOCOL

To update the event details (dates, prize pool, timeline, problem statements), you **do not** need to edit the UI components.

Navigate to `app/data/eventData.ts` and modify the centralized JSON object. The website UI will automatically compile the new data.

---

## 🤝 AUTHORIZED_COLLABORATORS

Organized and maintained by the **Department of Computer Science & Engineering (CSE & CSBS)** at VNRVJIET.

- **Institution:** VNRVJIET, Hyderabad
- **Event:** 4th Edition Design-A-Thon
- **Partners:** CSI Chapter // IIC Chapter

---

_END_OF_TRANSMISSION_
