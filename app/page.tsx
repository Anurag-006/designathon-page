"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ScheduleSection from "@/components/ScheduleSection";
import TracksSection from "@/components/TrackSection";
import SponsorsSection from "@/components/SponsorsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import GuidelinesSection from "@/components/GuidelinesSection";
import { hackathonData } from "@/app/data/eventData";
import ContactSection from "@/components/ContactSection";
export default function Home() {
  return (
    <>
      {/* Passing complete event object for name, tagline, and edition */}
      <Navbar eventData={hackathonData.event} />

      <main className="flex min-h-screen flex-col bg-[#050505]">
        <div id="hero">
          <HeroSection eventData={hackathonData.event} />
        </div>

        <div id="about">
          <AboutSection />
        </div>

        <div id="schedule">
          <ScheduleSection scheduleData={hackathonData.schedule} />
        </div>

        <div id="guidelines">
          <GuidelinesSection />
        </div>

        <div id="tracks">
          <TracksSection tracksData={hackathonData.tracks} />
        </div>

        {/* FIX: Prop name changed to 'sponsors' to match our dual-node component */}
        <div id="sponsors">
          <SponsorsSection sponsors={hackathonData.sponsors} />
        </div>

        <div id="sponsors">
          <ContactSection />
        </div>

        <div id="faqs">
          <FAQSection faqsData={hackathonData.faqs} />
        </div>

        {/* ADDED: coordinators data for the contact list in the footer */}
        <Footer contactData={hackathonData.contact} />
      </main>
    </>
  );
}
